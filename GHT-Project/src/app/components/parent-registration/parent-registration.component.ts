import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parent-registration',
  templateUrl: './parent-registration.component.html',
  styleUrls: ['./parent-registration.component.css']
})
export class ParentRegistrationComponent {

  registrationData = {
    name: '',
    email: '',
    password: ''
  };

  private apiUrl = 'http://localhost:5555/api/parents/register'; // Update with your actual backend URL

  constructor(private http: HttpClient) { } // Inject HttpClient

  registerParent() {
    this.http.post<any>(this.apiUrl, this.registrationData).subscribe(
      response => {
        console.log('Parent registered successfully', response);
        alert('Registration successful!');
        this.resetForm(); // Optional: Reset form after successful submission
      },
      error => {
        console.error('Error registering parent', error);
        alert('Registration failed. Please try again.');
      }
    );
  }

  resetForm() {
    this.registrationData = {
      name: '',
      email: '',
      password: ''
    };
  }
}
