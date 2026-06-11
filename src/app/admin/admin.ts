import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  model: any={};
  cover!:string;
  onFileSelected(event:any){
    const file=event.target.files[0];
    if(file){
      const reader=new FileReader();
      reader.onload=()=>{
        const dataUrl = reader.result?.toString();
        this.cover=dataUrl || '';
        console.log(dataUrl); // Log the data URL to the console
      }
      reader.readAsDataURL(file);
    }

  }
  addCourse(form:NgForm){
    if(form.invalid){
      console.log('Form is invalid');
      form.control.markAllAsTouched();
      return;
    }
    console.log(form.value);
  }

}
