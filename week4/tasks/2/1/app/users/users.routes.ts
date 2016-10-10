import { Route } from '@angular/router';
import { UserListComponent } from './index';

export const UsersRoutes: Route[] = [
  {
    path: 'users',
    component: UserListComponent
  }
];