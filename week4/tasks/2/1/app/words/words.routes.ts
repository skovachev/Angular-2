import { Route } from '@angular/router';
import { WordListComponent } from './index';

export const WordsRoutes: Route[] = [
  {
    path: 'words',
    component: WordListComponent
  }
];