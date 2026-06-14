import { Injectable } from '@angular/core';
import { String } from '../../enum/string.enum';
import { Course } from '../../interfaces/course.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses$ = new BehaviorSubject<Course[]>([]);
  get courses() {
    return this.courses$.asObservable();
  }
  constructor() { }
  
  getCourses(): Course[] {
    const data = localStorage.getItem(String.STORAGE_KEY);
    if (data) {
      const courses = JSON.parse(data);
      this.updateCourses(courses);
      return courses;
    }
    return [];
  }
  addCourse(data: Course) {
    const courses = this.courses$.value;
    const newCourses = [...courses, { ...data, id: courses.length + 1 }];
    this.updateCourses(newCourses);
    // save in local
    this.setItem(newCourses);
    return newCourses;
  }

  deleteCourse(data: Course) {
    let courses:Course[] = this.courses$.value;
    courses = courses.filter(c => c.id !== data.id);
    this.updateCourses(courses);
    this.setItem(courses);
  }

  updateCourses(data: Course[]) {
    this.courses$.next(data);
  }
  setItem(data: Course[]) {
    localStorage.setItem(String.STORAGE_KEY, JSON.stringify(data));
  }
}
