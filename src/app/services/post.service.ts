import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';
  private urlAlt = 'http://jsonplaceholder.typicode.com/abc';

  constructor(private http: HttpClient) {

   }

   getPosts() : Observable<any> {
    return this.http.get(this.url)
      .pipe(catchError(this.handleError));
   }

   createPost(post): Observable<any> {
    return this.http.post(this.url, post)
    .pipe(catchError( this.handleError));
   }

   updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .pipe(catchError(this.handleError));
   }

   deletePost(id) {
    return this.http.delete(this.urlAlt + '/' + id)
      .pipe(catchError(this.handleError));
   }

   private handleError(error: Response) {
    if(error.status === 400) 
      return throwError(() => new BadInput(error.json()));
    
    if(error.status === 404) 
      return throwError(() => new NotFoundError(error));    

    return throwError(() => new AppError(error)) ;
   }
} 
