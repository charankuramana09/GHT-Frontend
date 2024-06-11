import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private router: Router) {}

  startAsStudent() {
    this.router.navigate(['/student-signup']);
     }

  joinAsInstructor() {
    this.router.navigate(['/instructor-signup']);
  }

  joinAsParent() {
    this.router.navigate(['/parent-signup']);
  }

}

