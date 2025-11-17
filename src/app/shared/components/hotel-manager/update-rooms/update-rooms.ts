import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';

@Component({
  selector: 'app-update-rooms',
  imports: [ReactiveFormsModule, InputText, Button],
  templateUrl: './update-rooms.html',
  styleUrl: './update-rooms.scss',
})
export class UpdateRooms {
  roomForm = new FormGroup(
    {
      roomNumber: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      capacity: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      basePrice: new FormControl('', [Validators.required]),
    }
  );

  submitForm() {
    if (this.roomForm.valid) {
      console.log('Form Submitted:', this.roomForm.value);
    }
  }
}
