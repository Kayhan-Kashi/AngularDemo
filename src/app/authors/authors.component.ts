import { AuthorsService } from './../services/authors.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  authors;
  imageUrl : string = '/assets/angular.png' 
  constructor(private service: AuthorsService) {
    this.authors = service.getAuthors();
  }
}
