import { Component } from '@angular/core';
import { StudentDashboardService } from '../../../services/student-dashboard.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent {

  constructor(private studentDashboardService: StudentDashboardService ) { }

  student = {
    title: '',
    firstName: '',
    lastName: '',
    class: '',
    location: '',
    subjects: '',
    notes: ''
  };

  payments = {
    invoices: '',
    dates: '',
    status: ''
  };

  ngOnInit(): void { }

  generateMonthlyInvoice() {
    this.studentDashboardService.createPayments(this.payments).subscribe(data => {
      console.log('Payments created', data);
    });
  }

  createNewSummary() {
    this.studentDashboardService.createStudent(this.student).subscribe(data => {
      console.log('Student created', data);
    });
  }

  editProfile() {
    console.log('Editing profile...');
  }

  demoLinks() {
    console.log('Demo links...');
  }


}
