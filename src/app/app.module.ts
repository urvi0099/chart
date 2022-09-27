import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { FinanceComponent } from './finance/finance.component';
import { AccountantComponent } from './accountant/accountant.component';
import { AccGuard } from './guard/acc.guard';
import { AdminGuard } from './guard/admin.guard';
import { FinanceGuard } from './guard/finance.guard';
import { ChartComponent } from './chart/chart.component';
import { NgChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LoginComponent,
    HomeComponent,

    AdminComponent,
    HeaderComponent,
    FinanceComponent,
    AccountantComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
  ],
  providers: [AccGuard, AdminGuard, FinanceGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
