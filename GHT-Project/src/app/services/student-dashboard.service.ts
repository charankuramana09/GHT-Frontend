import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentDashboardService {


  private studentService = 'http://localhost:5555/api';

  constructor(private http: HttpClient)  { }

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


   //login
   login(user: any): Observable<any> {
    return this.http.post(`${this.studentService}/students/login`, user, { responseType: 'text' });
  }

}
