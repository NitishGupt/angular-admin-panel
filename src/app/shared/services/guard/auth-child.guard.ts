import { CanActivateChildFn } from '@angular/router';

export const authChildGuard: CanActivateChildFn = (childRoute, state) => {
  alert('Login is required for child route. This is a child route guard.');
  return false;
};
