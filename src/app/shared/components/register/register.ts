import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Button } from 'primeng/button';
import { Checkbox } from 'primeng/checkbox';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { Password } from 'primeng/password';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, InputText, Button, Password, Checkbox],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  registrationForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.maxLength(10), Validators.pattern(/^[6-9]\d{9}$/)]),
      requestedForHotelManager: new FormControl(false)
    },
    this.passwordMatchValidator
  );

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  submitForm() {
    if (this.registrationForm.valid) {
      console.log('Form Submitted:', this.registrationForm.value);
    }
  }
}
