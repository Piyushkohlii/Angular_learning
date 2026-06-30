import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { form , FormField} from '@angular/forms/signals';

@Component({
  selector: 'app-a26-signal-forms',
  imports: [CommonModule,FormField],
  templateUrl: './a26-signal-forms.html',
  styleUrl: './a26-signal-forms.css',
})
export class A26SignalForms {
  //form model based on signals
  loginModel = signal({
    email : "",
    password: ""
  })

  //create form from signal model
  loginForm = form(this.loginModel);

  submit(){
    console.log(this.loginModel())
  }
}
