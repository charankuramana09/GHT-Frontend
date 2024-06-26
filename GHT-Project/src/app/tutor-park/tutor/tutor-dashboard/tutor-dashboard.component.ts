import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DataDialogComponent } from '../../../components/data-dialog/data-dialog.component';

@Component({
  selector: 'app-tutor-dashboard',
  templateUrl: './tutor-dashboard.component.html',
  styleUrl: './tutor-dashboard.component.css'
})
export class TutorDashboardComponent {
  // student = {
  //   title: '',
  //   firstName: '',
  //   lastName: '',
  //   class: '',
  //   location: '',
  //   subjects: '',
  //   notes: ''
  // };

  // payments = {
  //   invoices: '',
  //   dates: '',
  //   status: ''
  // };

  // generateMonthlyInvoice() {
  //   // Logic to generate monthly invoice
  //   console.log('Generating monthly invoice...');
  // }

  // createNewSummary() {
  //   // Logic to create a new summary
  //   console.log('Creating new summary...');
  // }

  // editProfile() {
  //   // Logic to edit profile
  //   console.log('Editing profile...');
  // }

  // demoLinks() {
  //   // Logic for demo links
  //   console.log('Demo links...');
  // }




  dashboardForm  : FormGroup ;
  paymentHistory = ['Payment 1', 'Payment 2', 'Payment 3'];
  subjects = ['Math', 'Science', 'History'];
  chapters = ['Chapter 1', 'Chapter 2', 'Chapter 3'];
  materials = ['Material 1', 'Material 2', 'Material 3'];
  assignments = ['Assignment 1', 'Assignment 2', 'Assignment 3'];
  classes = ['Class 1', 'Class 2', 'Class 3'];
  tests = ['Test 1', 'Test 2', 'Test 3'];
  customTests = ['Custom Test 1', 'Custom Test 2', 'Custom Test 3'];
  messages = ['Message 1', 'Message 2', 'Message 3'];

  constructor(private fb: FormBuilder,private http : HttpClient,private route: ActivatedRoute,private dialog: MatDialog) {
    this.dashboardForm = this.fb.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      location: ['', Validators.required],
      subjects: ['', Validators.required],
      notes: [''],
      feeAmount: [0, Validators.required],
      materialSubject: ['', Validators.required],
      materialChapter: ['', Validators.required],
      testClass: ['', Validators.required],
      testSubject: ['', Validators.required],
      testChapter: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.dashboardForm.valid) {
      const formValue = this.dashboardForm.value;
      console.log('Form submitted successfully', formValue);
      // Handle form submission logic here
    }
  }

  payNow(): void {
    console.log('Pay Now clicked');
    // Handle pay now logic here
  }

  loginChat(): void {
    console.log('Login to Chat Support clicked');
  }

  loginQuery():void {
    console.log('Login to Query Support clicked');
  }


    //dailbox
displayData(): void {
  // Fetch data from API
  this.http.get<any>('http://localhost:5555/api/students/all').subscribe(
    (data) => {
      // Open the dialog and pass the fetched data
      this.dialog.open(DataDialogComponent, {
        data: data
        });
      console.log(data);
    },
    (error) => {
      console.error('Error fetching data:', error);
    }
  );
}


}
