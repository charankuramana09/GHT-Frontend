import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { StudentDashboardService } from '../../services/student-dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  student: any;
  imageUrl: SafeUrl | null = null;
  studentId: number | null = null;

  constructor(
    private router: Router, 
    private sanitizer: DomSanitizer,
    private studentService: StudentDashboardService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.studentId = navigation?.extras?.state?.['studentId'];

    if (this.studentId) {
      this.fetchStudentDetails(this.studentId);
    }
  }

  ngOnInit(): void {
    if (!this.student) {
      console.log('No student data available');
    }
  }

  fetchStudentDetails(id: number): void {
    this.studentService.getStudentById(id).subscribe(
      response => {
        this.student = response;
        if (this.student && this.student.image) {
          this.imageUrl = this.sanitizeImage(this.student.image);
        }
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
}
