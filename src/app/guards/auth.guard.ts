import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '@app/services/auth.service';

export const AuthGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const router = inject(Router);
    const authService = inject(AuthService);
    const isLoggedIn = authService.isLoggedIn();

    if (!isLoggedIn) {
        router.navigate(['/login']);
    }

    return isLoggedIn;
};
