import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  form: FormGroup;
  showPassword: boolean = false;
  hasError: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.buildForm();
  }

  ngOnInit(): void { }

  login() {
    if (this.form.valid) {
      const value = this.form.value;
      const user = {
        email: value.email,
        password: value.password,
      };
      const userStorage = localStorage.getItem('user');
      if (userStorage) {
        const userStorageObj = JSON.parse(userStorage);
        if (
          user.email === userStorageObj.email &&
          user.password === userStorageObj.password
        ) {
          setTimeout(() => {
            // this.authService.setToken('tu-token-jwt');
            this.router.navigate(['/home']);
          }, 500);
        } else {
          this.hasError = true;
        }
      } else {
        this.hasError = true;
      }
    } else {
      this.form.markAllAsTouched();
      this.hasError = true;
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}
