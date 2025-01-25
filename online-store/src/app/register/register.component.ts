import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
  passwordPattern = '^.{8,}$';
  phonePattern = '^[0-9]{10,15}$';

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const newUser = {
        name: form.value.name,
        email: form.value.email,
        password: form.value.password,
        address: form.value.address,
        phone: form.value.phone,
        favourite: form.value.favourite
      };

      localStorage.setItem(form.value.email, JSON.stringify(newUser));
      alert('Registration successful!');
      
      // Postavljanje ulogovanog korisnika i preusmeravanje na stranicu profila
      localStorage.setItem('loggedInUser', form.value.email);
      this.router.navigate(['/profile']);
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
