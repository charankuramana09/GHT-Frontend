import { Component, OnInit } from '@angular/core';
import { TutorRegistrationService } from '../../services/tutor-registration.service';
import { Router } from '@angular/router';

interface Tutor {
  name: string;
  image: string; // Ensure this is a base64 string or a valid image URL
  expertise: string;
  email:string;
}

@Component({
  selector: 'app-tutor-list',
  templateUrl: './tutor-list.component.html',
  styleUrls: ['./tutor-list.component.css']
})
export class TutorListComponent implements OnInit {

  tutorList: Tutor[] = [];

  constructor(private trs: TutorRegistrationService,private router:Router) { }

  ngOnInit(): void {
    this.trs.getTutors().subscribe((data: any[]) => {
      this.tutorList = data.map(tutor => ({
        name: tutor[0],
        image: tutor[3],
        expertise: tutor[2],
        email:tutor[1]
      }));
      console.log(this.tutorList);
    });
  }

  
  onTutorClick(tutor: Tutor): void {
    this.router.navigate(['/dashboard', tutor.email]   );
    console.log("Tutor ID : "+tutor.email);

  }
}
