import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-udemy-course',
  templateUrl: './new-course-udemy-course.component.html',
  styleUrls: ['./new-course-udemy-course.component.css']
})
export class NewCourseUdemyCourseComponent {
  form = new FormGroup({
    topics: new FormArray([])   //FormArray is useful when we need to work with array of objects in a form
  })
  

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = "";
  }

  removeTopic(topic: AbstractControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    return (this.form.get('topics') as FormArray);
  }

}
