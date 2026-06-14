import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { String } from '../../enum/string.enum';
import { Course } from '../../interfaces/course.interface';
import { CourseService } from '../../services/course/course.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses { 
  @Input() isAdmin= false;
  courses: Course[] = [];
  courseSub!: Subscription;
  private courseService=inject(CourseService)
  ngOnInit() {
    this.courses = this.courseService.getCourses();
    this.courseService.courses.subscribe({
      next: (courses) => {
        this.courses = courses;
        console.log(this.courses, courses);
      }, error: (e) => {
        console.log(e);
      }
    });
  }
  deleteCourse(course: Course) {
    this.courseService.deleteCourse(course);
  }
  ngOnDestroy() {
    console.log('course destory');
    if (this.courseSub) this.courseSub.unsubscribe();
  }
}

