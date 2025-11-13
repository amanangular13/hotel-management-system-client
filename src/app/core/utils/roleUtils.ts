import { inject } from '@angular/core';
import { Role } from '../../shared/constants/app-enums';
import { AuthService } from '../services/auth-service';

export function getUserRole(): Role | null {
  const authService = inject(AuthService);

  try {
    const role: string = authService.getRole();
    switch (role) {
      case Role.ADMIN:
        return Role.ADMIN;
      case Role.HOTEL_MANAGER:
        return Role.HOTEL_MANAGER;
      case Role.USER:
        return Role.USER;
      default:
        return null;
    }
  } catch {
    return null;
  }
}
