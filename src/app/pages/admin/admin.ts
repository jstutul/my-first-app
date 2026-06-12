import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Courses } from '../courses/courses';
import { form } from '@angular/forms/signals';
import { String } from '../../enum/string.enum';

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

  ngOnInit() {
    // this.getCourses();
  }
  // getCourses() {
  //   const data = localStorage.getItem(String.STORAGE_KEY);
  //   if (data) {
  //     this.courses = JSON.parse(data);
  //   }
  // }

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

  deleteCourse(course: any) {
    this.courses = this.courses.filter(c => c.id !== course.id)
    this.setItem(this.courses);
  }
  SaveCourse(form: NgForm) {
    const formValue = form.value;
    const data = {
      ...formValue, image: this.cover,id:this.courses.length+1
    };

    this.courses=[...this.courses,data]
    this.setItem(this.courses);
    this.clearForm(form);
  }
  setItem(data: any) {
    localStorage.setItem(String.STORAGE_KEY, JSON.stringify(data));
  }

}
