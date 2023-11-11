import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError, map, retry } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';


export class DataService {

  constructor(private url: string, private http: HttpClient) {}

   getAll() : Observable<any> {
    return this.http.get(this.url)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
   }

   create(resource): Observable<any> {
    return throwError(d => new AppError(d));
    // return this.http.post(this.url, resource)
    // .pipe(
    //   map(response => response),
    //   catchError( this.handleError)
    //   );
   }

   update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(
        map(response => response),
        catchError(this.handleError),
        retry(3)
        );
   }

   delete(id) {
    return throwError(d => new AppError(d));
    // return this.http.delete(this.url + '/' + id)
    //   .pipe(catchError(this.handleError));
   }

   private handleError(error: Response) {
    if(error.status === 400) 
      return throwError(() => new BadInput(error.json()));
    
    if(error.status === 404) 
      return throwError(() => new NotFoundError(error));    

    return throwError(() => new AppError(error)) ;
   }
} 
