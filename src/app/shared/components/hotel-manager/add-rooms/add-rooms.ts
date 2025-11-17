import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';

@Component({
  selector: 'app-add-rooms',
  imports: [ReactiveFormsModule, InputText, Button],
  templateUrl: './add-rooms.html',
  styleUrl: './add-rooms.scss',
})
export class AddRooms {
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
