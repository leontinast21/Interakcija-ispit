import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = {
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
    favourite: ''
  };

  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
  phonePattern = /^[0-9]{10,15}$/;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const loggedInUserEmail = localStorage.getItem('loggedInUser');
    if (loggedInUserEmail) {
      const storedUser = localStorage.getItem(loggedInUserEmail);
      if (storedUser) {
        this.user = JSON.parse(storedUser);
      }
    }
  }

  saveChanges() {
    localStorage.setItem(this.user.email, JSON.stringify(this.user));
    alert('Profile updated successfully!');
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }

  isValidEmail(email: string): boolean {
    return this.emailPattern.test(email);
  }

  isValidPassword(password: string): boolean {
    return this.passwordPattern.test(password);
  }

  isValidPhone(phone: string): boolean {
    return this.phonePattern.test(phone);
  }
}
