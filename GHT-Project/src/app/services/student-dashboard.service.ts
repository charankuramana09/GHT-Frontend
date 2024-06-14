import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentDashboardService {

  private studentService = 'http://localhost:5555/api';
  
  constructor(private http: HttpClient)  { }

  // Existing methods for students and payments
  getStudents(): Observable<any> {
    return this.http.get(`${this.studentService}/studentdashboard`);
  }

  createStudent(student: Object): Observable<Object> {
    return this.http.post(`${this.studentService}/studentdashboard/save`, student);
  }

  getPayments(): Observable<any> {
    return this.http.get(`${this.studentService}/payments`);
  }

  createPayments(payments: Object): Observable<Object> {
    return this.http.post(`${this.studentService}/payments`, payments);
  }

  // Modified login method to accept user type and redirect accordingly
  login(user: any, userType: string): Observable<any> {
    const endpoint = userType === 'tutor' ? '/tutors/login' : '/students/login';
    return this.http.post(`${this.studentService}${endpoint}`, user, { responseType: 'text' });
  }

}
