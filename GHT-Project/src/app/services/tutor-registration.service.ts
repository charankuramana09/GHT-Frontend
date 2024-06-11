import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { TutorDetails } from '../models/tutor-details.model';
import { File } from 'node:buffer';
import { fileURLToPath } from 'node:url';
import { type } from 'node:os';
import { Student } from '../tutor-park/student/student.model';
@Injectable({
  providedIn: 'root'
})
export class TutorRegistrationService {


private form1Data: any = {};
private form2Data: any = {};


private uploadUrl = 'http://localhost:5555/api/tutors/register';  

constructor(private http: HttpClient) {}

setForm1Data(data: any) {
  this.form1Data = data;
  console.log("form1Data", this.form1Data);
}
setForm2Data(data: any) {
  this.form2Data = data;
  console.log("form2Data", this.form2Data);
}



uploadFiles(files: { [key: string]: any }): Observable<any> {
  const formData: FormData = new FormData();

  // Append each file to the FormData object
  for (const key in files) {
    if (files.hasOwnProperty(key) && files[key]) {
      formData.append(key, files[key], files[key].name);
    }
  }

  let params = new HttpParams();
    for (const key in this.form1Data) {
  
      if (this.form1Data.hasOwnProperty(key)) {
        params = params.append(key, this.form1Data[key]);
        console.log("params", params.toString());
      }
    }

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

  return this.http.post<any>(this.uploadUrl, formData, { params, headers,
    reportProgress: true,
    observe: 'events'
   })

    .pipe(
      catchError(this.handleError)
    );

  
}

private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // Client-side error
    console.error('Client-side error:', error.error.message);
  } else {
    // Server-side error
    console.error(`Server-side error: ${error.status} - ${error.error}`);
  }
  return throwError('File upload failed. Please try again.');
}


//Student Service

private baseUrl = 'http://localhost:5555/api/students/save';


createStudent(data: any): Observable<Object> {
  const combinedData = { ...this.form1Data, ...this.form2Data };
  return this.http.post(`${this.baseUrl}`, combinedData);
}


 // Get a list of all students
 getStudentsList(): Observable<Student[]> {
  return this.http.get<Student[]>(`${this.baseUrl}`);
}

// Get a student by ID
getStudent(id: number): Observable<Student> {
  return this.http.get<Student>(`${this.baseUrl}/${id}`);
}

// Update a student by ID
updateStudent(id: number, student: Object): Observable<Object> {
  return this.http.put(`${this.baseUrl}/${id}`, student);
}

// Delete a student by ID
deleteStudent(id: number): Observable<void> {
  return this.http.delete<void>(`${this.baseUrl}/${id}`);
}


}