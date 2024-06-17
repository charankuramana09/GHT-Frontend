import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeaveACommentComponent} from './components/leave-a-comment/leave-a-comment.component'; // Adjust the path if necessary

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUrl = 'http://localhost:5555/api/postComment';  // URL to the Spring Boot backend

  constructor(private http: HttpClient) {}

  createComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${this.baseUrl}/postComment`, comment);
  }

  getCommentById(id: number): Observable<Comment> {
    return this.http.get<Comment>(`${this.baseUrl}/fecthpostById/${id}`);
  }
}
