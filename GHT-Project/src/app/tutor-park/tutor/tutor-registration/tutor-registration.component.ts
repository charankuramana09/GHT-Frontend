import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TutorRegistrationService } from '../../../services/tutor-registration.service';

@Component({
  selector: 'app-tutor-registration',
  templateUrl: './tutor-registration.component.html',
  styleUrl: './tutor-registration.component.css'
})
export class TutorRegistrationComponent {
  registrationForm: FormGroup;

  files: { [key: string]: File } = {
    resume: null,
    drivingLicense: null,
    addressProof: null,
    photo: null
  };

  constructor(private fb: FormBuilder, private trs: TutorRegistrationService) {
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
    const selectedSubjects=this.registrationForm.value;
    formData.append('maths', selectedSubjects.maths?'false':'true')
    formData.append('physics', selectedSubjects.physics?'false':'true');
    formData.append('chemistry',selectedSubjects.chemistry?'false':'true');
    formData.append('social', selectedSubjects.social?'false':'true');
    
 console.log(formData);
  this.trs.uploadFiles(this.files,formData).subscribe(
    response => {
      
      console.log('After the subject is : ' ,formData.get('maths'),formData.get('physics'),formData.get('chemistry'),formData.get('social'))
      console.log('Files successfully uploaded:', response);
      
    },
    error => {
      console.error('Error uploading files:', error);
    }
  );
  
}
  }



