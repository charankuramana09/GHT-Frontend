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
  
  // email: string = '';
  // password: string = '';


  // onSubmit() {
  //   const loginPayload = { email: this.email, password: this.password };

  //   this.http.post('http://localhost:5555/api/login', loginPayload)
  //     .subscribe(
  //       response => {
  //         // Handle successful login response (e.g., save token and navigate)
  //         console.log('Login successful', response);
  //         this.router.navigate(['/dashboard']);
  //       },
  //       error => {
  //         // Handle login failure
  //         console.error('Login failed', error);
  //         alert('Login failed. Please check your email and password.');
  //       }
  //     );
  // }


  
  user = { email: '', password: '' };
  message: string;

  // constructor(private service: StudentDashboardService,private router: Router) {}

  // onSubmit(): void {
  //   this.service.login(this.user).subscribe(
  //     response => {
  //       this.message = response;
  //       console.log(response);
  //       if (response === 'Login successful') {
  //         this.router.navigate(['/tutor-dashboard']);
  //             }
  //     },
  //     error => {
  //       this.message = 'Login failed';
  //     }
  //   );
  // }





  constructor(private service: StudentDashboardService,private router: Router) {}

  onSubmit() {
    this.service.login(this.user).subscribe(
      success => {
        if (success) {
          if (this.userType === 'tutor') {
            this.router.navigate(['/tutor-dashboard']);
          } else if (this.userType === 'student') {
            this.router.navigate(['/student-dashboard.component']);
          }
        } else {
          alert('Login failed');
        }
      }
    );
  }




}
