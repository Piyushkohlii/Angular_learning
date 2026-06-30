import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-a17-form-field-component',
  imports: [],
  templateUrl: './a17-form-field-component.html',
  styleUrl: './a17-form-field-component.css',
})
export class A17FormFieldComponent {
  label = input<String>();
  // value = input<string>();
  type = input<string>();
  valueChange = output<string>();

  onInput(value:string){
    console.log("child value : ",value);
    this.valueChange.emit(value);
  }

}
