import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentDashboardService } from '../../services/student-dashboard.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {
  email: string = '';
  password: string = '';
  userType: string = 'tutor'; // Default to 'tutor'
  user = { email: '', password: '' };
  message: string;

  constructor(private service: StudentDashboardService, private router: Router) {}

  onSubmit(): void {
    this.service.login(this.user, this.userType).subscribe(
      response => {
        console.log(response);
        if (response === 'Login successful') {
          if (this.userType === 'student') {
            this.router.navigate(['/student-dashboard']);
          } else if (this.userType === 'tutor') {
            this.router.navigate(['/tutor-dashboard']);
          }
        } else {
          this.message = 'Login failed';
        }
      },
      error => {
        this.message = 'Login failed';
      }
    );
  }
}
