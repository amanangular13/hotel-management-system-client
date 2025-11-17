import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';

@Component({
  selector: 'app-update-hotel',
  imports: [ReactiveFormsModule, InputText, Button],
  templateUrl: './update-hotel.html',
  styleUrl: './update-hotel.scss',
})
export class UpdateHotel {
  hotelForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      pinCode: new FormControl('', [Validators.required]),
      contactEmail: new FormControl('', [Validators.required, Validators.email]),
      contactNumber: new FormControl('', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]),
      imageUrls: new FormControl([], [Validators.required]),
      amenities: new FormControl([], [Validators.required])
    }
  );

  submitForm() {
    if (this.hotelForm.valid) {
      console.log('Form Submitted:', this.hotelForm.value);
    }
  }
}
