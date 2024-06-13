import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StudentDashboardService } from '../../services/student-dashboard.service';
import { ServicesService } from '../../services.service'; 
@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {

  email: string = '';
  password: string = '';
  userType: string = 'tutor';
  user = { email: '', password: '' };
  message: string;
  constructor(private service: StudentDashboardService,private router: Router) {}
  onSubmit(): void {
    this.service.login(this.user).subscribe(
      response => {
        this.message = response;
        console.log(response);
        if (response === 'Login successful') {
          this.router.navigate(['/student-dashboard']);
              }
      },
      error => {
        this.message = 'Login failed';
      }
    );
  }


}
