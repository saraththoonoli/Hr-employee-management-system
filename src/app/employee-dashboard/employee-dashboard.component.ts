import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {
  loggedInEmployeeId: string | null;
  loggedInEmployee: any;
  

  constructor(
    private authService: AuthService,
    private employeeService: EmployeeService,
    private router:Router
  ) {
    this.loggedInEmployeeId = this.authService.getLoggedInEmployeeId();
  }

  ngOnInit(): void {
    this.loadLoggedInEmployeeDetails();
  }

  loadLoggedInEmployeeDetails(): void {
    if (this.loggedInEmployeeId) {
      this.employeeService
        .getEmployeeDetails(+this.loggedInEmployeeId)
        .subscribe((data) => {
          this.loggedInEmployee = data;
        });
    }
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  
}
