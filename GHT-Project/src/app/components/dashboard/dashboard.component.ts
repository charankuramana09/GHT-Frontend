import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { StudentDashboardService } from '../../services/student-dashboard.service';
import { DataDialogComponent } from '../data-dialog/data-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TutorRegistrationService } from '../../services/tutor-registration.service';

interface Tutor {
  email:string;
  name: string;
  image: string; // Ensure this is a base64 string or a valid image URL
  expertise: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  student: any = {};
  imageUrl: SafeUrl | null = null;
  studentId: number | null = null;
  studentName: string | null = null;

  constructor(
    private router: Router, 
    private sanitizer: DomSanitizer,
    private studentService: StudentDashboardService,
    private dialog: MatDialog, private trs: TutorRegistrationService,
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.studentId = navigation?.extras?.state?.['studentId'];
  }
  
  ngOnInit(): void {
    
        if (this.studentId) {
          this.fetchStudentDetails(this.studentId);
        } 
    if (!this.student) {
      console.log('No student data available');
    }
  }

  fetchStudentDetails(id: number): void {
    this.studentService.getStudentById(id).subscribe(
      response => {
        this.student = response;
        console.log(this.student);
        if (this.student && this.student.image) {
          this.imageUrl = this.sanitizeImage(this.student.image);
        }
        // Assign the studentName to the outside variable
        this.studentName = this.student.name;
        this.getCountBySubject();
      },
      error => {
        console.error('Failed to fetch student details', error);
      }
    );
  }
  
  sanitizeImage(imageData: string): SafeUrl {
    const base64Image = `data:image/jpeg;base64,${imageData}`;
    return this.sanitizer.bypassSecurityTrustUrl(base64Image);
  }

 
  
  
  subjectCounts: { tutorname: string, sub:string }[] = [];
  
  
  getCountBySubject(): void {
    // console.log("Outside variable StudentName: " + this.studentNameOutside);
    console.log(" inside get function :  " + this.studentName )
    if (this.studentName) {
      console.log(this.subjectCounts);
      this.trs.SelectBySubject(this.studentName).subscribe(
        (data) => {
          this.subjectCounts = data.map(d => ({ tutorname: d[0], sub: d[1] }));
          console.log(data);
          console.log(" selceted subjects : " + this.subjectCounts);
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
        data: { studentName : this.studentName, subjectCounts: this.subjectCounts }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
  
  




}
