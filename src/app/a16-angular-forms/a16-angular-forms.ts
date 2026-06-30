import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder , ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-a16-angular-forms',
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './a16-angular-forms.html',
  styleUrl: './a16-angular-forms.css',
})
export class A16AngularForms {
  user = signal({
    name:"",
    email:"",
  })
  form:any;
  constructor(private fb : FormBuilder){
    this.form = this.fb.group({
      user:[""],
      email:[""]
    })
    this.form.valueChanges.subscribe((value : any)=>{
      this.user.set(value);
    })
  }

  submitForm(){
    console.log(`name : ${this.user().name} , email : ${this.user().email}`)
  }
}
