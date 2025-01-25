import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}


  onSubmit(form: NgForm) {
    const storedUser = localStorage.getItem(this.email);
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.password === this.password) {
        localStorage.setItem('loggedInUser', this.email);
        alert('Login succesful!');
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
      } else {
        alert('The entered data is not correct!');
      }
    } else {
      alert('This user is not exist!');
    }
  }

  emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
  
}
