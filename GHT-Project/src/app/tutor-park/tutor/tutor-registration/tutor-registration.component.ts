import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TutorRegistrationService } from '../../../services/tutor-registration.service';

@Component({
  selector: 'app-tutor-registration',
  templateUrl: './tutor-registration.component.html',
  styleUrl: './tutor-registration.component.css'
})
export class TutorRegistrationComponent {

  files: { [key: string]: File } = {
    resume: null,
    drivingLicense: null,
    addressProof: null,
    photo: null
  };

  constructor(private fb: FormBuilder, private trs: TutorRegistrationService) {

   }
  
   onFileChange(event: any, fileType: string) {
    this.files[fileType] = event.target.files[0];
  }

  onSubmit() {
    this.trs.uploadFiles(this.files).subscribe(
      response => {
        console.log('Files successfully uploaded:', response);
      },
      error => {
        console.error('Error uploading files:', error);
      }
    );
  }




  }



