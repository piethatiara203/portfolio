import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  password = '';
  showAlert = 'alert alert-info'

  formLogin: FormGroup;
  error = ''

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.formLogin = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get errorControl() {
    return this.formLogin.controls;
  }

  doLogin() {
    console.log(this.formLogin);

    const payload = {
      username: this.formLogin.value.username,
      password: this.formLogin.value.password,
    };

    this.authService.login(payload).subscribe(
      response => {
        console.log(response);
        alert(response.jwtrole);
        if (response.jwtrole === 'admin') {
          localStorage.setItem('token', response.token)
          this.router.navigate(['/admin/dashboard'])
        }
        if (response.jwtrole === 'user') {
          this.router.navigate(['/users']);
        } else {
          this.showAlert = 'alert alert-warning';
          console.log("You don't have permission to enter this page")
        }
      },
      (error) => {
        console.log(error);
        alert(error.error.message);
        this.error = error.error.message;
      }
    )
  }
}
