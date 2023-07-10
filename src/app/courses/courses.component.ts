import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  onDivClicked() {
    console.log("div clicked");
  }
  onSave($event) {
    console.log("Button was clicked", $event)
  }
}
