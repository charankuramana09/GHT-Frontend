import { Component ,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tutor-list',
  templateUrl: './tutor-list.component.html',
  styleUrl: './tutor-list.component.css'
})
export class TutorListComponent implements OnInit{


  imageData: string | ArrayBuffer;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getImageFromBackend();
  }

  getImageFromBackend() {
    // Make a GET request to your backend API to fetch the image data
    this.http.get('http://localhost:5555/api/tutors/register', { responseType: 'blob' })
      .subscribe((data: Blob) => {
        // Convert the Blob data to base64 string
        const reader = new FileReader();
        reader.readAsDataURL(data);
        reader.onloadend = () => {
          this.imageData = reader.result;
        };
      });
  }
}
