import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { a01 } from './01_interpolationAndPropetyBinding/01_interpolationAndPropertyBinding';
import { A2Events } from './a2-events/a2-events';
import { A3ButtonClickFunc } from './a3-button-click-func/a3-button-click-func';


@Component({
  selector: 'app-root',
  imports: [a01,A2Events,A3ButtonClickFunc],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_learning');
  name = "hello world";
  isAdmin = true;
  getUser(){
    return "Piyush kumar";
  }
  tittle = signal("this is a signal");
}
