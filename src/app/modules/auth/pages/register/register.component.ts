import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyValidators } from 'src/app/shared/utils/utils';

@Component({
  selector: 'form-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  hasError: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.buildForm();
  }

  ngOnInit(): void { }

  register() {
    if (this.form.valid) {
      const value = this.form.value;
      const user = {
        username: value.username,
        email: value.email,
        password: value.password,
      };
      localStorage.setItem('user', JSON.stringify(user));
      setTimeout(() => {
        this.router.navigate(['/auth/login']);
      }, 500);
    } else {
      this.form.markAllAsTouched();
      this.hasError = true;
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group(
      {
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      },
      {
        validators: MyValidators.matchPassword,
      }
    );
  }

  get passwordField() {
    return this.form.get('password');
  }

  get confirmPasswordField() {
    return this.form.get('confirmPassword');
  }
}
