
import { Routes } from '@angular/router';

import { RegisterRoutes } from './register/index';
import { UsersRoutes } from './users/index';
import { WordsRoutes } from './words/index';
import { LoginRoutes } from './login/index'

export const routes: Routes = [
	{
		path: '',
		redirectTo: '/users',
		pathMatch: 'full'
	},
	...LoginRoutes,
  	...RegisterRoutes,
  	...UsersRoutes,
  	...WordsRoutes
];