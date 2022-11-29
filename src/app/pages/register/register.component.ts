import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  username = ''
  email = ''
  noTelp = ''
  password = ''
  role = ''

  formRegister: FormGroup;

  error = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.formRegister = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      noTelp: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      role: ['', [Validators.required]]
    });
  }

  get errorControl() {
    return this.formRegister.controls;
  }

  doRegister() {
    console.log(this.formRegister);

    const payload = {
      username: this.formRegister.value.username,
      email: this.formRegister.value.email,
      noTelp: this.formRegister.value.noTelp,
      password: this.formRegister.value.password,
      role: this.formRegister.value.role
    };

    this.authService.register(payload).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
        alert(error.error.message);
      }
    );
  }
}
