import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  credentials = {
    email: '',
    password: ''
  };


  onLogin() {
    // Ensure form is valid before attempting login
    if (this.loginForm.invalid) {
      return;
    }

    const credentials = this.loginForm.value;

    this.authService.login(credentials).subscribe(
      response => {
        console.log('Login successful', response);
        // Store token and navigate to dashboard or home
        localStorage.setItem('token', response.token);
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }



}
