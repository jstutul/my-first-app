import { Component, EventEmitter, Input, Output } from '@angular/core';
import { String } from '../../enum/string.enum';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses { 

  // @Input() course: any;
  // @Input() courses: any;
  @Input() isDelete = false;
  @Input() isAdmin= false;
  @Output() del = new EventEmitter();
  courses: any[] = [];
  // deleteCourse() {
  //   this.del.emit(this.courses);
  // }
  ngOnInit() {
    this.getCourses();
  }
  deleteCourse(course:any) {
    this.del.emit(course);
    
  }
  getCourses() {
    const data = localStorage.getItem(String.STORAGE_KEY);
    if (data) {
      this.courses = JSON.parse(data);
    }
  }
}

