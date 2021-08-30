import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { CustomersDetailsComponent } from './components/customers-details/customers-details.component';
import { CustomersEditComponent } from './components/customers-edit/customers-edit.component';
import { CustomersNewComponent } from './components/customers-new/customers-new.component';
import { CustomersComponent } from './components/customers/customers.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', canActivate: [AuthGuard], component: LoginComponent },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: '/dashboard/customers', pathMatch: 'full' },
      { path: 'customers', component: CustomersComponent },
      { path: 'customers/new', component: CustomersNewComponent },
      { path: 'customers/:id', component: CustomersDetailsComponent },
      { path: 'customers/:id/edit', component: CustomersEditComponent },
      { path: 'contacts', component: ContactComponent },
      { path: 'page-not-found', component: PageNotFoundComponent },
    ],
  },
  { path: '**', redirectTo: '/dashboard/page-not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
