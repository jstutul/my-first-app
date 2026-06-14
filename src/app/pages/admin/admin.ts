import { Component,inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Courses } from '../courses/courses';
// import { form } from '@angular/forms/signals';
import { String } from '../../enum/string.enum';
import { CourseService } from '../../services/course/course.service';
import { Course } from '../../interfaces/course.interface';
@Component({
  selector: 'app-admin',
  imports: [FormsModule,Courses],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  model: any={};
  cover!: string|null;
  cover_file!: any;
  showError = false;
  courses: any[] = [];
  private courseService = inject(CourseService)
  
  ngOnInit() {
    this.courses = this.courseService.getCourses();
    
  }

  onFileSelected(event:any){
    const file=event.target.files[0];
    if (file) {
      this.cover_file = file;
      const reader=new FileReader();
      reader.onload=()=>{
        const dataUrl = reader.result?.toString();
        this.cover=dataUrl || '';
      }
      reader.readAsDataURL(file);
      this.showError = false;
    }

  }
  addCourse(form:NgForm){
    if(form.invalid || !this.cover){
      console.log('Form is invalid');
      form.control.markAllAsTouched();
      if (!this.cover) {
        this.showError = true;
      }
      return;
    }
    this.SaveCourse(form);
  }

  clearForm(form:NgForm) {
    form.reset();
    this.cover = null;
    this.cover_file = null;
  }
  async SaveCourse(form: NgForm) {
    try {
      const formValue = form.value;
      const data:Course = {
        ...formValue, image: this.cover
      };
      await this.courseService.addCourse(data);
      this.clearForm(form);
    } catch (ex) {
      console.log(ex);
    }
    
  }
}
