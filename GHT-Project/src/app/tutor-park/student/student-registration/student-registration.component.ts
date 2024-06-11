import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TutorRegistrationService } from '../../../services/tutor-registration.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrl: './student-registration.component.css'
})
export class StudentRegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder,private trs: TutorRegistrationService) { }

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
      fatherPhone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      fatherEmail: ['', [Validators.required, Validators.email]],
      motherName: ['', Validators.required],
      motherOccupation: ['', Validators.required],
      motherPhone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      motherEmail: ['', [Validators.required, Validators.email]],
      parentAddress: ['', Validators.required]
    });

    this.registrationForm.valueChanges.subscribe(value => {
      this.trs.setForm2Data(value);
      console.log(value);
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.trs.createStudent(this.registrationForm.value).subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
    } else {
      console.log('Form is invalid');
    }
  }

}

