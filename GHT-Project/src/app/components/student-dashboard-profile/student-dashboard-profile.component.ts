import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataDialogComponent } from '../data-dialog/data-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-student-dashboard-profile',
  templateUrl: './student-dashboard-profile.component.html',
  styleUrl: './student-dashboard-profile.component.css'
})
export class StudentDashboardProfileComponent {

  
  constructor(private fb: FormBuilder,private http : HttpClient,private route: ActivatedRoute,private dialog: MatDialog){}


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
