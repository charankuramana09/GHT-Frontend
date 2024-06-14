import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router
import { TutorRegistrationService } from '../../../services/tutor-registration.service';

@Component({
  selector: 'app-tutor-registration',
  templateUrl: './tutor-registration.component.html',
  styleUrls: ['./tutor-registration.component.css']
})
export class TutorRegistrationComponent {
  registrationForm: FormGroup;

  files: { [key: string]: File } = {
    resume: null,
    drivingLicense: null,
    addressProof: null,
    photo: null
  };

  constructor(private fb: FormBuilder, private trs: TutorRegistrationService, private router: Router) { // Inject Router
    this.registrationForm = this.fb.group({
      maths: false,
      physics: false,
      chemistry: false,
      social: false
    });
  }

  onFileChange(event: any, fileType: string) {
    this.files[fileType] = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    const selectedSubjects = this.registrationForm.value;

    formData.append('maths', selectedSubjects.maths ? 'true' : 'false');
    formData.append('physics', selectedSubjects.physics ? 'true' : 'false');
    formData.append('chemistry', selectedSubjects.chemistry ? 'true' : 'false');
    formData.append('social', selectedSubjects.social ? 'true' : 'false');

    // Append files to formData
    for (const fileType in this.files) {
      if (this.files[fileType]) {
        formData.append(fileType, this.files[fileType], this.files[fileType].name);
      }
    }

    this.trs.uploadFiles(this.files, formData).subscribe(
      response => {
        console.log('Files successfully uploaded:', response);
        console.log('Selected subjects:', {
          maths: formData.get('maths'),
          physics: formData.get('physics'),
          chemistry: formData.get('chemistry'),
          social: formData.get('social')
        });

        // Navigate to login page after successful registration
        this.router.navigate(['/login']); // Add this line for navigation
      },
      error => {
        console.error('Error uploading files:', error);
      }
    );
  }
}
