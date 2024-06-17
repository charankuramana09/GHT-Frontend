import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  student: any;
  imageUrl: SafeUrl | null = null;

  constructor(private router: Router, private sanitizer: DomSanitizer) {
    const navigation = this.router.getCurrentNavigation();
    this.student = navigation?.extras?.state?.['student'];

    if (this.student) {
      console.log(this.student); // Check the student object
      if (this.student.image) {
        this.imageUrl = this.sanitizeImage(this.student.image);
        console.log(this.imageUrl); // Check the generated URL
      }
    }
  }

  ngOnInit(): void {
    if (!this.student) {
      console.log('No student data available');
    }
  }

  // Method to sanitize and create image URL
  sanitizeImage(imageData: string): SafeUrl {
    const base64Image = `data:image/jpeg;base64,${imageData}`;
    return this.sanitizer.bypassSecurityTrustUrl(base64Image);
  }
}
