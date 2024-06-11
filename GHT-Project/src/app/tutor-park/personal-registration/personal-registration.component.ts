import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TutorRegistrationService } from '../../services/tutor-registration.service';

@Component({
  selector: 'app-personal-registration',
  templateUrl: './personal-registration.component.html',
  styleUrl: './personal-registration.component.css'
})
export class PersonalRegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder,private trs: TutorRegistrationService) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      city: ['', Validators.required],
      mobileNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.checkPasswords });
       // When form data changes, update the service data
       this.registrationForm.valueChanges.subscribe(value => {
        this.trs.setForm1Data(value);
      });
  }

  checkPasswords(group: FormGroup) {
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value;
    return pass === confirmPass ? null : { notSame: true };
  }



}
