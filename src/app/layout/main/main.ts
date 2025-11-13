import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth-service';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  http = inject(HttpClient);
  authService = inject(AuthService);

  onClick() {
    this.http
      .post<any>(
        'https://api-gateway-production-5174.up.railway.app/api/v1/auth/login',
        {
          email: 'aman@gmail.com',
          password: 'amanverma1234',
        },
        { withCredentials: true }
      )
      .subscribe((res) => {
        this.authService.setRole(res.data.role);
      });
  }

  onUpdate() {
    this.http
      .get<any>(
        'https://api-gateway-production-5174.up.railway.app/api/v1/users/email/aman@gmail.com',
        { withCredentials: true }
      )
      .subscribe((res) => {
        console.log(res.data);
      });
  }
}