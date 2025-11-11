import { Routes } from '@angular/router';
import { SelectPortfolioPage } from './features/select-portfolio-page/select-portfolio-page';
import { PoePage } from './features/poe-page/poe-page';
import { ManuPage } from './features/manu-page/manu-page';

export const routes: Routes = [
  {
    path: '',
    component: SelectPortfolioPage,
  },
  {
    path: 'poe',
    component: PoePage,
  },
  {
    path: 'manu',
    component: ManuPage,
  },
  {
    path: '**',
    component: SelectPortfolioPage,
  },
];
