import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit{

  constructor(private route: Router) {

  }

 
  submit() {
    console.log(1);
    //this.route.navigate(['/followers', 1]);   //if we had required parameters
    this.route.navigate(['/followers'], {
      queryParams: {page: 1, order: 'newest'}
    });
  }
  // constructor(private route: ActivatedRoute) {

  // }
  ngOnInit(): void {
    // let id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    // let username = this.route.snapshot.paramMap.get('username');
    // console.log(username);
  
    // console.log("on init")
    // this.route.paramMap
    // .subscribe(params => {
    //   let id = params.get('id');
    //   console.log(id);
    // });
  }
}
