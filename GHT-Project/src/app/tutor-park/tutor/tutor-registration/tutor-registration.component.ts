import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TutorRegistrationService } from '../../../services/tutor-registration.service';

@Component({
  selector: 'app-tutor-registration',
  templateUrl: './tutor-registration.component.html',
  styleUrls: ['./tutor-registration.component.css']
})
export class TutorRegistrationComponent{
  registrationForm: FormGroup;
   isStudentLoggedIn: boolean;

  

  files: { [key: string]: File } = {
    resume: null,
    drivingLicense: null,
    addressProof: null,
    photo: null
  };

  ngOnInIt():void{
    this.registrationForm = this.fb.group(
      {
        resume:[null, Validators.required],
        drivingLicense:[null , Validators.required],
        addressProof:[null, Validators.required],
        photo:[null, Validators.required]
      }
    );

    this.registrationForm.valueChanges.subscribe(value =>{
      this.trs.setForm2Data(value);
      console.log(value);
    });
      

  }



  constructor(private fb: FormBuilder, private trs: TutorRegistrationService, private router: Router) {
    this.registrationForm = this.fb.group({
      subjects: this.fb.array([]) // FormArray to store selected subjects
    });
    this.isStudentLoggedIn = this.checkIfStudentLoggedIn();
  }

  onFileChange(event: any, fileType: string) {
    this.files[fileType] = event.target.files[0];
  }

  

  checkIfStudentLoggedIn(): boolean {
    return true;
  }

  onCheckboxChange(event: any) {
    const subjectsArray = this.registrationForm.controls.subjects as FormArray;
    if (event.target.checked) {
      // Add the new subject value directly
      subjectsArray.push(this.fb.control(event.target.value));
    } else {
      // Find the index of the subject and remove it
      const index = subjectsArray.controls.findIndex(x => x.value === event.target.value);
      if (index >= 0) {
        subjectsArray.removeAt(index);
      }
    }
  }

  


  onSubmit() {
    const formData = new FormData();
    const selectedSubjects = this.registrationForm.value.subjects;

    // Append each selected subject directly
    selectedSubjects.forEach((subject: string) => {
      formData.append('subjects', subject);
    });

    // Append files to formData
    for (const fileType in this.files) {
      if (this.files[fileType]) {
        formData.append(fileType, this.files[fileType], this.files[fileType].name);
      }
    }

    this.trs.uploadFiles(this.files, formData).subscribe(
      response => {
        console.log('Files successfully uploaded:', response);
        console.log('Selected subjects:', selectedSubjects);

        // Navigate to login page after successful registration
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Error uploading files:', error);
      }
    );
  }
}
