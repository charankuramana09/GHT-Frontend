import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorParkComponent } from './tutor-park/tutor-park.component';
import { TutorComponent } from './tutor-park/tutor/tutor.component';
import { TutorRegistrationComponent } from './tutor-park/tutor/tutor-registration/tutor-registration.component';
import { TutorDashboardComponent } from './tutor-park/tutor/tutor-dashboard/tutor-dashboard.component';
import { StudentComponent } from './tutor-park/student/student.component';
import { StudentRegistrationComponent } from './tutor-park/student/student-registration/student-registration.component';
import { StudentDashboardComponent } from './tutor-park/student/student-dashboard/student-dashboard.component';
import { PersonalRegistrationComponent } from './tutor-park/personal-registration/personal-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClassesComponent } from './components/classes/classes.component';
import { ParentRegistrationComponent } from './components/parent-registration/parent-registration.component';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CuroselComponent } from './components/home-page/curosel/curosel.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TutorListComponent } from './components/tutor-list/tutor-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoriesComponent } from './components/categories/categories.component';
import{StudentDashboardProfileComponent} from './components/student-dashboard-profile/student-dashboard-profile.component';
import { ArrangeATutorComponent } from './components/arrange-a-tutor/arrange-a-tutor.component';
import { ContactComponent } from './components/contact/contact.component'
import { DataDialogComponent } from './components/data-dialog/data-dialog.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



const appRouting: Routes =[
  {path:'home', component:HomePageComponent},
 {path : 'tutor', component: TutorDashboardComponent},
 { path: 'student', component: StudentDashboardProfileComponent},
 {path: 'login' , component: StudentLoginComponent},
 {path: 'classes', component:ClassesComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    TutorParkComponent,
    TutorComponent,
    TutorRegistrationComponent,
    TutorDashboardComponent,
    StudentComponent,
    StudentRegistrationComponent,
    StudentDashboardComponent,
    PersonalRegistrationComponent,
    NavbarComponent,
    FooterComponent,
    ClassesComponent,
    ParentRegistrationComponent,
    CuroselComponent,
    StudentLoginComponent,
    HomePageComponent,
    TutorListComponent,
    DashboardComponent,
    CategoriesComponent,
    StudentDashboardProfileComponent,
    ArrangeATutorComponent,
    ContactComponent,
    DataDialogComponent
  ],
  imports: [
    BrowserModule ,
    RouterModule.forRoot(appRouting),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    

   
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
