import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  const currentuser = localStorage.getItem('currentUser')
  const router = inject(Router);
  // if (!currentuser) {
  //   alert('Login required');
  //   router.navigate(['/login']);
  //   return true;
  // }
  // const user = JSON.parse(currentuser);
  // if (user.userRole === 'admin') {
  //   return true;
  // } else {
  //   alert('No Access')
  //   return false;
  // }
  return true;
};
