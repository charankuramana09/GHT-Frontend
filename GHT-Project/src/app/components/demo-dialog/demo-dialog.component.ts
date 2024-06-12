import { Component,OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-demo-dialog',
  templateUrl: './demo-dialog.component.html',
  styleUrl: './demo-dialog.component.css'
})
export class DemoDialogComponent implements OnInit{
  demoData: any = {};

  constructor(public dialogRef: MatDialogRef<DemoDialogComponent>) {}

  ngOnInit(): void {}

  submitDemo() {
    // Send demoData to backend
    console.log(this.demoData);
    this.dialogRef.close();
  }
}
