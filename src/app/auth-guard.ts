import { CanActivateFn,Router } from '@angular/router';
import { Auth } from './auth';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);
  console.log('Guard running');
  console.log('Logged In:', auth.isLoggedIn());

  if(auth.isLoggedIn()){
    return true;
  }
  router.navigate(['/login']);
  return false;

};
