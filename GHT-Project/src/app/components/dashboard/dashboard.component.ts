import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  student: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.student = navigation?.extras?.state?.['student'];
  }

  ngOnInit(): void {
    if (!this.student) {
      // No student data available, handle accordingly
    }
  }
}
