import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseUdemyCourseComponent } from './new-course-udemy-course.component';

describe('NewCourseUdemyCourseComponent', () => {
  let component: NewCourseUdemyCourseComponent;
  let fixture: ComponentFixture<NewCourseUdemyCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCourseUdemyCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCourseUdemyCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
