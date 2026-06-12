import { Component } from '@angular/core';
import { Courses } from "../courses/courses";
import { String } from '../../enum/string.enum';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Courses],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  courses: any[] = [];
  ngOnInit() {
      // this.getCourses();
    }
    // getCourses() {
    //   const data = localStorage.getItem(String.STORAGE_KEY);
    //   if (data) {
    //     this.courses = JSON.parse(data);
    //   }
    // }
  
}
