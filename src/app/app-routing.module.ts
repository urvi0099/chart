import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountantComponent } from './accountant/accountant.component';
import { AdminComponent } from './admin/admin.component';
import { FinanceComponent } from './finance/finance.component';
import { FormComponent } from './form/form.component';
import { AccGuard } from './guard/acc.guard';
import { AdminGuard } from './guard/admin.guard';
import { FinanceGuard } from './guard/finance.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    component: AdminComponent,
  },
  {
    path: 'accountant',
    component: AccountantComponent,
    canActivate: [AccGuard],
  },
  { path: 'finance', component: FinanceComponent, canActivate: [FinanceGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
