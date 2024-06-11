import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-arrange-a-tutor',
  templateUrl: './arrange-a-tutor.component.html',
  styleUrl: './arrange-a-tutor.component.css'
})
export class ArrangeATutorComponent {

  formData = {
    name: '',
    email: '',
    subject: '',
    tutor: '',
    classLevel: '',  
  date: ''
};

constructor(private http: HttpClient) {}

onSubmit() {
    this.http.post('http://localhost:5555/api/seat/save', this.formData)
        .subscribe(response => {
            console.log('Registration successful', response);
        }, error => {
            console.error('There was an error!', error);
        });
}
}







