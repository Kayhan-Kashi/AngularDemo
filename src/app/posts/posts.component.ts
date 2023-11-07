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
    this.service.getAll()
    .subscribe(posts => this.posts = posts
    );
  }

    createPost(input: HTMLInputElement) {
      let post = { title: input.value };
      this.posts.splice(0, 0, post);  // we add on top before calling server

      input.value = '';  // notice two way binding

      this.service.create(JSON.stringify(post))
        .subscribe({
          next: (newPost) => {
            post['id'] = newPost['id'];
          },
          error: (err : AppError) => {
            this.posts.splice(0, 1);  // roll back changes at the top of error callback function
            
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
      this.service.update(post)
        .subscribe(updatedPost => {
          console.log(updatedPost);
        });
    }

    deletePost(post) {
      let index = (this.posts as any[]).indexOf(post);
      this.posts.splice(index, 1);

      this.service.delete(-200).subscribe({
        next: () => {
     
        },
        error: (error : AppError) => {
          this.posts.splice(index, 0, post);

          if (error instanceof NotFoundError) {
            alert("This post has already been deleted");
          }
          else{
            throw error;
          }  
      }});      
    }
}
