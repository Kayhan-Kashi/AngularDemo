import { RouterModule } from '@angular/router'; 
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './services/courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './services/authors.service';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './pipes/summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseUdemyCourseComponent } from './new-course-udemy-course/new-course-udemy-course.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { ChangeLoggerDirective } from './change-logger.directive';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundError } from 'rxjs';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArchiveComponent } from './route-exercise/archive/archive.component';
import { AdminComponent } from './AuthCourse/Components/admin/admin.component';
import { LoginComponent } from './AuthCourse/Components/login/login.component';
import { NoAccessComponent } from './AuthCourse/Components/no-access/no-access.component';
import { OrderService } from './AuthCourse/services/Order/order.service';
import { AuthService } from './AuthCourse/services/Auth/auth.service';



const appRoutes: Routes = [


]

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent,
    CoursesComponent,
    SignupFormComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCaseComponent,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    NewCourseUdemyCourseComponent,
    ChangePasswordComponent,
    SampleFormComponent,
    ChangeLoggerDirective,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    ArchiveComponent,
    AdminComponent,
    LoginComponent,
    NoAccessComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'login', component: LoginComponent },
      { path: 'no-access', component: NoAccessComponent }
    ]),
    // RouterModule.forRoot([
    //   { 
    //     path: '',
    //     component: HomeComponent 
    //   },
    //   { 
    //     path: 'archive/:year/:month',
    //     component: ArchiveComponent
    //   },
    //   {
    //     path: '**',
    //     component: NotFoundComponent
    //   }   
    // ])
    // RouterModule.forRoot([
    //   { 
    //     path: '',
    //     component: HomeComponent 
    //   },
    //   { 
    //     path: 'followers/:id/:username',
    //     component: GithubProfileComponent
    //   },
    //   { 
    //     path: 'followers', 
    //     component: GithubFollowersComponent 
    //   },
    //   { 
    //     path: 'posts',
    //     component: PostsComponent 
    //   },
    //   { 
    //     path: '**',
    //     component: NotFoundComponent 
    //   }
    // ])
  ],
  // providers: [
  //   CoursesService,
  //   AuthorsService,
  //   PostService,
  //   GithubFollowersService,
  //   { provide: ErrorHandler, useClass: AppErrorHandler},
  // ],
  providers: [
    OrderService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
