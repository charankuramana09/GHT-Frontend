import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private fb: FormBuilder, private trs: TutorRegistrationService, private router: Router) {
    this.registrationForm = this.fb.group({
      subjects: this.fb.array([]) // FormArray to store selected subjects
    });
  }

  onFileChange(event: any, fileType: string) {
    this.files[fileType] = event.target.files[0];
  }

  onCheckboxChange(event: any) {
    const subjectsArray = this.registrationForm.controls.subjects as FormArray;
    if (event.target.checked) {
      subjectsArray.push(this.fb.control(event.target.value));
    } else {
      const index = subjectsArray.controls.findIndex(x => x.value === event.target.value);
      subjectsArray.removeAt(index);
    }
  }

  onSubmit() {
    const formData = new FormData();
    const selectedSubjects = this.registrationForm.value.subjects;
    
    // Append selected subjects as an array
    formData.append('subjects', JSON.stringify(selectedSubjects));

    // Append files to formData
    for (const fileType in this.files) {
      if (this.files[fileType]) {
        formData.append(fileType, this.files[fileType], this.files[fileType].name);
      }
    }

    this.trs.uploadFiles(this.files, formData).subscribe(
      response => {
        console.log('Files successfully uploaded:', response);
        console.log('Selected subjects:', formData.get('subjects'));

        // Navigate to login page after successful registration
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Error uploading files:', error);
      }
    );
  }
}
