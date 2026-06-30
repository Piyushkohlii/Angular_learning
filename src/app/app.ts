import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { a01 } from './01_interpolationAndPropetyBinding/01_interpolationAndPropertyBinding';
import { A2Events } from './a2-events/a2-events';
import { A3ButtonClickFunc } from './a3-button-click-func/a3-button-click-func';
import { A4Counter } from './a4-counter/a4-counter';
import { A5GetSetValues } from './a5-get-set-values/a5-get-set-values';
import { A6SwitchStatement } from './a6-switch-statement/a6-switch-statement';
import { A7ForLoops } from './a7-for-loops/a7-for-loops';
import { A8Signal } from './a8-signal/a8-signal';
import { A9Effects } from './a9-effects/a9-effects';
import { A10Pipes } from './a10-pipes/a10-pipes';
import { A11TodoProject } from './a11-todo-project/a11-todo-project';
import { A12ComponentBinding } from './a12-component-binding/a12-component-binding';
import { A14ParentComponent } from './a14-parent-component/a14-parent-component';
import { A15SignalStore } from './a15-signal-store/a15-signal-store';
import { A16AngularForms } from './a16-angular-forms/a16-angular-forms';
import { A17CardComponent } from './a17-card-component/a17-card-component';
import { A17ButtonComponent } from './a17-button-component/a17-button-component';
import { A17FormFieldComponent } from './a17-form-field-component/a17-form-field-component';
import { A25LifeCyclesChild } from './a25-life-cycles-child/a25-life-cycles-child';
import { A26SignalForms } from './a26-signal-forms/a26-signal-forms';
import { A27GetMethod } from './a27-get-method/a27-get-method';
import { A28JsonServer } from './a28-json-server/a28-json-server';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet,RouterLink],
  imports:[A28JsonServer],  
  standalone:true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('angular_learning');
  // name = "hello world";
  // isAdmin = true;
  // getUser(){
  //   return "Piyush kumar";
  // }
  // tittle = signal("this is a signal");

  // message = ""
  // onSave(msg:string){
  //   console.log(msg);
  //   this.message = msg;
  // }

  // email = "";
  // onEmailChange(value : string){
  //   console.log("email : ",value);
  //   this.email= value;
  // }

  // title = signal("hello from app component");
  // show=signal(true);
  // changeTitle(){
  //   this.title.set("titke changed")
  // }
  // toggle(){
  //   this.show.set(!this.show());
  // }
}
