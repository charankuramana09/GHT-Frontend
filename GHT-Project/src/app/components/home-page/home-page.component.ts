import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DemoDialogComponent } from '../demo-dialog/demo-dialog.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private router: Router, public dialog: MatDialog) {}

  startAsStudent() {
    this.router.navigate(['/student-signup']);
  }

  joinAsInstructor() {
    this.router.navigate(['/instructor-signup']);
  }

  joinAsParent() {
    this.router.navigate(['/parent-signup']);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DemoDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
