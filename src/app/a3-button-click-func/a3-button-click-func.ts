import { Component } from '@angular/core';

@Component({
  selector: 'app-a3-button-click-func',
  imports: [],
  templateUrl: './a3-button-click-func.html',
  styleUrl: './a3-button-click-func.css',
})
export class A3ButtonClickFunc {
  buttonCLicked = false;
  handleClick(){
    this.buttonCLicked= true;
    this.consoleClicked();
  }
  consoleClicked(){
    console.log("button is clicked")
  }
}
