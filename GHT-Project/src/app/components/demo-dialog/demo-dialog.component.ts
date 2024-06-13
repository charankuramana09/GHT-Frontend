import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-demo-dialog',
  templateUrl: './demo-dialog.component.html',
  styleUrls: ['./demo-dialog.component.css']
})
export class DemoDialogComponent {

  demoData = {
    name: '',
    email: '',
    class: '',
    subject: '',
    tutor: ''
  };

  private apiUrl = 'http://localhost:5555/api/demo-booking/book'; 

  constructor(private http: HttpClient) { } t

  submitDemo() {
    this.http.post<any>(this.apiUrl, this.demoData).subscribe(
      response => {
        console.log('Demo booked successfully', response);
        alert('Demo booked successfully!'); 
        this.resetForm(); 
      },
      error => {
        console.error('Error booking demo', error);
        alert('Error booking demo. Please try again.'); 
      }
    );
  }

  resetForm() {
    this.demoData = {
      name: '',
      email: '',
      class: '',
      subject: '',
      tutor: ''
    };
  }
}
