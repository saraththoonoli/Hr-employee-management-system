import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { EmpEditComponent } from './emp-edit/emp-edit.component';
import { HrLeaveComponent } from './hr-leave/hr-leave.component';
import { FooterComponent } from './footer/footer.component';
import { WilsCardComponent } from './wils-card/wils-card.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HrDashboardComponent,
    EmployeeDashboardComponent,
    EmployeeDetailsComponent,
    CreateEmployeeComponent,
    NavBarComponent,
    DonutChartComponent,
    EditEmployeeComponent,
    EmpDetailsComponent,
    LeaveApplicationComponent,
    LeaveRequestComponent,
    EmpEditComponent,
    HrLeaveComponent,
    FooterComponent,
    WilsCardComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
