import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './services/courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './services/authors.service';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './pipes/summary.pipe';


const appRoutes: Routes = [


]

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent,
    CoursesComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
