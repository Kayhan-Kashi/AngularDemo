import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
    title = 'List of courses'
    courses;
    colSpan = 2;
    isActive = true;
    
    constructor(private service: CoursesService) {
      this.courses = service.getCourses();
    }

    getTitle() {
      return this.title;
    }

  }
