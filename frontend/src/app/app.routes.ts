import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { PurchaseListComponent } from './components/purchase-list/purchase-list.component';
import { PurchaseFormComponent } from './components/purchase-form/purchase-form.component';

export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'users/create', component: UserFormComponent },
  { path: 'users/edit/:id', component: UserFormComponent },
  { path: 'purchases', component: PurchaseListComponent },
  { path: 'purchases/create', component: PurchaseFormComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];