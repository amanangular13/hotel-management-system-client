import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, UrlTree } from '@angular/router';

import { getUserRole } from '../utils/jwtUtils';
import { Role } from '../../shared/constants/app-enums';

export const roleGuard = (expectedRoles: Role[]) => {
  return (): boolean | UrlTree => {
    const router = inject(Router);
    const role = getUserRole();

    if (!role) {
      return router.parseUrl('/login');
    }

    if (expectedRoles.includes(role)) {
      return true;
    }

    return router.parseUrl('/unauthorized');
  };
};
