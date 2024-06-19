import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router
import { TutorRegistrationService } from '../../../services/tutor-registration.service';
import { File } from 'node:buffer';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css'] // Note the change from styleUrl to styleUrls
})
export class StudentRegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private trs: TutorRegistrationService,
    private router: Router ,// Inject Router
    
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      board: ['', Validators.required],
      school: ['', Validators.required],
      class: ['', Validators.required],
      preferredTimings: ['', Validators.required],
      daysPerWeek: ['', [Validators.required, Validators.min(1), Validators.max(7)]],
      sessionDuration: ['', [Validators.required, Validators.min(30)]],
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      fatherName: ['', Validators.required],
      fatherOccupation: ['', Validators.required],
      fatherPhone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]{10}$')]],
      fatherEmail: ['', [Validators.required, Validators.email]],
      motherName: ['', Validators.required],
      motherOccupation: [''],
      motherPhone: ['', [Validators.required,Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]{10}$')]],
      motherEmail: [''],
      parentAddress: ['', Validators.required],
      image: [null, Validators.required]
    });

    this.registrationForm.valueChanges.subscribe(value => {
      this.trs.setForm2Data(value);
      console.log(value);
    });
    
  }

  selectedImage: File | null = null;
  
  onImageChange(event: any) {
    this.selectedImage = <File>event.target.files[0];
  }

  phoneValidator(control: AbstractControl) {
    const value = control.value;
    if (value && value.length !== 10) {
      return { minlength: true };
    }
    if(value && value.length === 10){
      return{maxlength:true};
    }
    return null;
  }


  onSubmit() {


    if (this.registrationForm.valid) {
      this.trs.createStudent(this.registrationForm.value,this.selectedImage
      ).subscribe(
        data => {
          console.log(data);
          
          this.router.navigate(['/login']);
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

 
}
