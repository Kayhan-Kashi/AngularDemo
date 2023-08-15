import { Component } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  categories = [
    {id:1, name:'Development'},
    {id:1, name:'Art'},
    {id:1, name:'Languages'},
  ]

  submit(course) {
    console.log(course);
  }
}
