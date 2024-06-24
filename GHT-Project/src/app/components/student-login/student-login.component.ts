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
  userType: string = 'student'; // Default to 'student'
  user = { email: '', password: '' };
  rememberMe: boolean = false;
  message: string;

  constructor(private service: StudentDashboardService, private router: Router) {}

  onSubmit(): void {
    this.service.login(this.user, this.userType).subscribe(
      response => {
        console.log(response);
        if (response && response.id) {
          if (this.userType === 'student') {
            // Navigate to dashboard with student ID
            this.router.navigate(['/student-dashboard'], { state: { studentId: response.id } });
          } else if (this.userType === 'tutor') {
            this.router.navigate(['/tutor-dashboard']);
          }
        } else {
          this.message = 'Login failed. Please check your email and password.';
        }
      },
      error => {
        this.message = 'Login failed. Please check your email and password.';
        console.error('Error:', error);
      }
    );
  }
}
