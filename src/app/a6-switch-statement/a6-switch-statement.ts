import { Component } from '@angular/core';

@Component({
  selector: 'app-a6-switch-statement',
  imports: [],
  templateUrl: './a6-switch-statement.html',
  styleUrl: './a6-switch-statement.css',
})
export class A6SwitchStatement {
  searchedDay : string = "";
  showWorkout(day:string){
    this.searchedDay = day.toLowerCase();
  }
}
