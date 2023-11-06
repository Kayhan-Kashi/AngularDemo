import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url;

  constructor(private http: HttpClient) {

   }

   getAll() : Observable<any> {
    return this.http.get(this.url)
      .pipe(catchError(this.handleError));
   }

   create(resource): Observable<any> {
    return this.http.post(this.url, resource)
    .pipe(catchError( this.handleError));
   }

   update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(catchError(this.handleError));
   }

   delete(id) {
    return this.http.delete(this.url + '/' + id)
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
