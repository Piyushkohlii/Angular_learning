import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-a17-button-component',
  imports: [],
  templateUrl: './a17-button-component.html',
  styleUrl: './a17-button-component.css',
})
export class A17ButtonComponent {
  label = input<string>();
  clicked = output<string>();


  onClick(){
    console.log("card button clicked(child)");
    this.clicked.emit("Button clicked successfully")
  }
}
