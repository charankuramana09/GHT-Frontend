import { ChangeDetectorRef, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DataDialogComponent } from '../../components/data-dialog/data-dialog.component';
import { TutorRegistrationService } from '../../services/tutor-registration.service';

interface Tutor {
  email:string;
  name: string;
  image: string; // Ensure this is a base64 string or a valid image URL
  expertise: string;
}



@Component({
  selector: 'app-public-tutor-dashboard',
  templateUrl: './public-tutor-dashboard.component.html',
  styleUrl: './public-tutor-dashboard.component.css'
})
export class PublicTutorDashboardComponent {

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

  constructor(private fb: FormBuilder,private http : HttpClient,private route: ActivatedRoute,private dialog: MatDialog, private trs: TutorRegistrationService, private cdr: ChangeDetectorRef) {
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

 

  tutorList: Tutor[] = [];


  ngOnInit(): void {
    this.loadTutorData();
    this.getCountBySubject();
    this.countStudents();
    
  }

  async loadTutorData(): Promise<void> {
    const email = this.route.snapshot.paramMap.get('email');
    if (email) {
      try {
        const data = await this.trs.getTutorByEmail(email).toPromise();
        this.tutorList = data.map(tutor => ({
          name: tutor[1],
          image: `data:image/jpeg;base64,${tutor[2]}`, // Assuming tutor[3] is the image string
          expertise: tutor[3],
          email: tutor[0],
        }));
        this.tutorList = data.expertise.split(',');
      } catch (error) {
        console.error('Error fetching tutor data:', error);
      }
    }
  }


  onSubmit(): void {
    if (this.dashboardForm.valid) {
      const formValue = this.dashboardForm.value;
      console.log('Form submitted successfully', formValue);
    }
  }

  payNow(): void {
    console.log('Pay Now clicked');
  }

  loginChat(): void {
    console.log('Login to Chat Support clicked');
  }

  loginQuery():void {
    console.log('Login to Query Support clicked');
  }



//subject list 

// tutorName: string =  this.tutorList[1].name;
tutorName: string =  "siva";
 

subjectCounts: { name: string, sub:string, email:string }[] = [];


getCountBySubject(): void {
  if (this.tutorName) {
    console.log(this.subjectCounts);
    this.trs.countBySubject(this.tutorName).subscribe(
      (data) => {
        this.subjectCounts = data.map(d => ({ name: d[0], sub: d[1],email:d[2] }));
        console.log(data);
      },
      (error) => {
        console.error('Error fetching count by subject', error);
      }
    );
  }

}
  displayData(): void {
    const dialogRef = this.dialog.open(DataDialogComponent, {
      width: '400px',
      data: { tutorName: this.tutorName, subjectCounts: this.subjectCounts }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }




// student count...




subject: string = 'Physics'; // Example subject
studentCount: number = 0;



countStudents(): void {
  this.trs.countStudentsBySubject(this.subject)
  .subscribe(
      count => {
        this.studentCount = count;
        console.log(count);
      },
      error => {
        console.error('Error fetching student count:', error);
        // Handle error as needed
      }
    );
  }



  
}
