import { Routes } from '@angular/router';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BudgetComponent } from './pages/budget/budget.component';

export const routes: Routes = [
  { path: '', redirectTo: '/budget', pathMatch: 'full' },
  { path: 'timeline', component: TimelineComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'budget', component: BudgetComponent },
  { path: '**', redirectTo: '/budget' },
];
