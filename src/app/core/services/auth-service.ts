import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private role = signal("");
  private loggedIn = signal(false);

  setRole(role: string) {
    this.role.set(role);
  }

  getRole(): string {
    return this.role();
  }

  setLoggedIn(status: boolean) {
    this.loggedIn.set(status);
  }

  getLoggedIn() {
    return this.loggedIn();
  }
}
