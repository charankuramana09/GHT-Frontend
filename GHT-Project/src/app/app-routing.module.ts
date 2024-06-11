import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { StudentRegistrationComponent } from './tutor-park/student/student-registration/student-registration.component';
import { TutorRegistrationComponent } from './tutor-park/tutor/tutor-registration/tutor-registration.component';
import { ParentRegistrationComponent } from './components/parent-registration/parent-registration.component';
import { PersonalRegistrationComponent } from './tutor-park/personal-registration/personal-registration.component';
import { TutorDashboardComponent } from './tutor-park/tutor/tutor-dashboard/tutor-dashboard.component';
import { StudentDashboardComponent } from './tutor-park/student/student-dashboard/student-dashboard.component';
import { TutorParkComponent } from './tutor-park/tutor-park.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
 
  { path: 'student-signup', component: StudentRegistrationComponent },
  { path: 'instructor-signup', component: TutorRegistrationComponent },
  { path: 'parent-signup', component: ParentRegistrationComponent },
  { path: 'tutor-dashboard', component: TutorDashboardComponent },
  { path: 'student-dashboard', component: StudentDashboardComponent },
  { path: 'tutor-park', component: TutorParkComponent },
  {path: 'contact',component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
