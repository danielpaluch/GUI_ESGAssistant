import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { firstValueFrom, take } from 'rxjs';

export const authGuardLoginPage: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isLogged = await firstValueFrom(
    authService.isUserLogged().pipe(take(1)),
  );
  if (isLogged) {
    router.navigate(['/']);
    return false;
  }

  return true;
};
