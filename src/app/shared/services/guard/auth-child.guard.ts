import { CanActivateChildFn } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';
import { inject } from '@angular/core';
import { map } from 'rxjs/operators';

export const authChildGuard: CanActivateChildFn = (childRoute, state) => {
  const userService = inject(UserserviceService);

  return userService.currentUser.pipe(map(currentUser => {
      if (currentUser) {
        return true;
      } else {
        alert('Access Denied: Please login');
        return false;
      }
    })
  );
};

