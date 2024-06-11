import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showHeaderFooter = true;

  constructor(private router: Router) {
    // Subscribe to router events to determine current route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Define routes that should hide the header and footer
        const hiddenRoutes = ['/student-signup', '/instructor-signup', '/parent-signup', '/tutor-dashboard', '/student-dashboard'];
        this.showHeaderFooter = !hiddenRoutes.includes(event.urlAfterRedirects);
      }
    });
  }}
