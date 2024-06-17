import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-leave-a-comment',
  templateUrl: './leave-a-comment.component.html',
  styleUrls: ['./leave-a-comment.component.css']
})
export class LeaveACommentComponent implements OnInit {
  commentForm: FormGroup;
  private baseUrl = 'http://localhost:5555/api/comments';  // Update with your backend URL

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.commentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      website: [''],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.commentForm.valid) {
      this.http.post<any>(this.baseUrl, this.commentForm.value)
        .subscribe({
          next: response => {
            console.log('Form submitted successfully', response);
            alert('Comment successful!');
            this.commentForm.reset(); // Optionally reset the form after successful submission
          },
          error: error => {
            console.error('Error submitting form', error);
            alert('Comment failed. Please try again.');
          }
        });
    } else {
      console.error('Form is not valid');
      // Mark all fields as touched to trigger validation messages
      this.markFormGroupTouched(this.commentForm);
    }
  }

  // Helper function to mark all form controls as touched
  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
