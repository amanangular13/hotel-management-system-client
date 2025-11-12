import { jwtDecode } from 'jwt-decode';
import { Role } from '../../shared/constants/app-enums';

export function getUserRole(): Role | null {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const decoded: any = jwtDecode(token);
    switch (decoded.role) {
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
