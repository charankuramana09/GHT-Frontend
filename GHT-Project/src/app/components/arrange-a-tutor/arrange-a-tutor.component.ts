import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-arrange-a-tutor',
  templateUrl: './arrange-a-tutor.component.html',
  styleUrls: ['./arrange-a-tutor.component.css']
})
export class ArrangeATutorComponent implements OnInit {

  formData = {
    name: '',
    email: '',
    subject: '',
    tutor: '',
    classLevel: '',
    date: ''
  };

  minDate: string;
  availableTutors: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }

  onSubjectChange(subject: string) {
    if (subject) {
      this.http.get(`http://localhost:5555/api/tutors/by-subject?subject=${subject}`)
        .subscribe((data: any) => {
          this.availableTutors = data;
        }, error => {
          console.error('Error fetching tutors', error);
        });
    } else {
      this.availableTutors = [];
    }
  }

  onSubmit() {
    this.http.post('http://localhost:5555/api/seat/save', this.formData)
      .subscribe(response => {
        console.log('Tutor booking successful', response);
      }, error => {
        console.error('There was an error while booking tutor!', error);
      });
  }
}
