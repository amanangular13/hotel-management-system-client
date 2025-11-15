import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterLink],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  authService = inject(AuthService);
}
