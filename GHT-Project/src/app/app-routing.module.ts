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
import { TutorListComponent } from './components/tutor-list/tutor-list.component';
import { StudentDashboardProfileComponent } from './components/student-dashboard-profile/student-dashboard-profile.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { PublicTutorDashboardComponent } from './components/public-tutor-dashboard/public-tutor-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
const routes: Routes = [
 
  { path: 'student-signup', component: StudentRegistrationComponent },
  { path: 'instructor-signup', component: TutorRegistrationComponent },
  { path: 'parent-signup', component: ParentRegistrationComponent },
  { path: 'tutor-dashboard', component: TutorDashboardComponent },
  { path: 'student-dashboard', component: DashboardComponent },
  { path: 'tutor-park', component: TutorParkComponent },
  { path: 'tutor', component: TutorListComponent },
  { path: 'login',component:StudentLoginComponent},
  {path:'public-tutor', component:PublicTutorDashboardComponent},
  {path :'dashboard',component:PublicTutorDashboardComponent},
  {path : 'dashboard/:email' , component: PublicTutorDashboardComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
