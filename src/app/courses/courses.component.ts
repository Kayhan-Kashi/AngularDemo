import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  }
  email = "me@email.com";

  text = "njfeirnfcvwbeifwncjwnifuwhiedcnwofdnweufuiwefmjcwoeufhweifncwiefncwiebiwgg";

  onDivClicked() {
    console.log("div clicked");
  }
  onSave($event) {
    $event.stopPropogation();
    console.log("Button was clicked", $event)
  }

  onKeyUp($event) {
     console.log("Enter was pressed")
     console.log($event.target.value)
  }

  onKeyUpVer1(email) {
    console.log(email)
 }

  onkeyUpVer2() {
    console.log(this.email)
  }
}
