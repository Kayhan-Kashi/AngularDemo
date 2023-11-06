import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;

    constructor(private service: PostService) {
    
    }

  ngOnInit(): void {
    this.service.getPosts().subscribe(response => {
      this.posts = response;
      console.log(response);
    });
  }



    createPost(input: HTMLInputElement) {
      let post = { title: input.value }
      this.service.createPost(JSON.stringify(post))
        .subscribe({
          next: (response) => {
            post['id'] = response['id'];
            this.posts.splice(0, 0, post);
            console.log(response);
          },
          error: (err : AppError) => {
            if(err instanceof BadInput) {
              // this.form.setErrors(err.originalError);
            }
            else {
              throw err;
            }
          }
        });
    }

    updatePost(post) {
      this.service.updatePost(post)
        .subscribe(response => {
          console.log(response);
        });
    }

    deletePost(post) {
      this.service.deletePost(-200).subscribe({
        next: response => {
          let index = (this.posts as any[]).indexOf(post);
          this.posts.splice(index, 1);
        },
        error: (error : AppError) => {
          if (error instanceof NotFoundError) {
            alert("This post has already been deleted");
          }
          else{
            throw error;
          }  
      }});      
    }
}
