import { Component, ViewEncapsulation } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  viewMode = 'map';
  // courses = [1, 2];
  courses = [
    { id : 1, name:'course1' },
    { id : 2, name:'course2' },
    { id : 3, name:'course3' }
  ]

  coursesForBtn;

  title: string = 'Angular demo';
  post = {
    title: "Title",
    isFavorite: true
  }

  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed", eventArgs.newValue)
  }

  changeViewMode(value: string) {
    this.viewMode = value;
  }

  onAdd() {
    this.courses.push({ id: 4, name: 'course4'})
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course) {
    course.name = 'UPDATED';
  }
 
  loadCourses() {
    this.coursesForBtn = [
      { id : 1, name:'course1' },
      { id : 2, name:'course2' },
      { id : 3, name:'course3' }
    ]
  }

  trackCourse(index, course) {
    return course ? course.id : undefined; 
    // if we have a course object we want to return it's id otherwise we want to return undefined
  }

}


