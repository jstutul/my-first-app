import { Component } from '@angular/core';
import { Courses } from "../courses/courses";
import { About } from "../about/about";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Courses, About],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // courses: any[] = [];
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
