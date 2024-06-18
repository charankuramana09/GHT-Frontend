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
    console.log('Selected subject:', subject); // Debugging line
    if (subject) {
      this.http.get<any[]>(`http://localhost:5555/api/tutors/by-subject`, {
        params: { subject }
      }).subscribe(
        (data: any[]) => {
          console.log('Tutors fetched:', data); // Log the full data
          this.availableTutors = data.map(tutor => {
            console.log('Inspecting tutor object:', tutor); // Detailed tutor log

            // Accessing name and surname from nested personalDetails object
            const personalDetails = tutor.personalDetails || {};
            const name = personalDetails.name || 'Unknown';
            const surname = personalDetails.surname || '';
            const fullName = `${name} ${surname}`.trim();

            console.log('Constructed fullName:', fullName); // Log the full name

            return {
              ...tutor,
              fullName
            };
          });
          console.log('Mapped availableTutors:', this.availableTutors); // Log the final list
        },
        (error) => {
          console.error('Error fetching tutors', error);
          this.availableTutors = [];
        }
      );
    } else {
      this.availableTutors = [];
    }
  }

  onSubmit() {
    if (!this.formData.tutor) {
      alert('Please select a tutor');
      return;
    }

    this.http.post('http://localhost:5555/api/seat/save', this.formData)
      .subscribe(
        (response) => {
          console.log('Tutor booking successful', response);
          alert('Booking successful!');
        },
        (error) => {
          console.error('There was an error while booking tutor!', error);
          alert('Booking failed. Please try again later.');
        }
      );
  }
}
