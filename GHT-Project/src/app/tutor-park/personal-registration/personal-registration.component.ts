// Update in personal-registration.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { TutorRegistrationService } from '../../services/tutor-registration.service';


@Component({
  selector: 'app-personal-registration',
  templateUrl: './personal-registration.component.html',
  styleUrls: ['./personal-registration.component.css']
})
export class PersonalRegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  Registration: boolean = false;
  isStudentLoggedIn: boolean;

  constructor(private fb: FormBuilder, private trs: TutorRegistrationService) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      city: ['', Validators.required],
      mobileNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      addressLine1: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      inputCity:['',Validators.required],
      inputZip:['', Validators.required],
      inputState:['',Validators.required],
      image: [null, Validators.required]
    }, { validator: this.checkPasswords });

    this.registrationForm.valueChanges.subscribe(value => {
      this.trs.setForm1Data(value);
    });

    this.isStudentLoggedIn = this.checkIfStudentLoggedIn();
  }


  selectedImage: File | null = null;
  
  onImageChange(event: any) {
    this.selectedImage = <File>event.target.files[0];
  }

  checkIfStudentLoggedIn(): boolean {
    return true;
  }
  

  checkPasswords(group: FormGroup) {
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value;
    return pass === confirmPass ? null : { notSame: true };
  }

  phoneValidator(control: AbstractControl) {
    const value = control.value;
    if (value && value.length !== 10) {
      return { minlength: true };
    }
    if (value && value.length === 10) {
      return { maxlength: true };
    }
    return null;
  }


}
