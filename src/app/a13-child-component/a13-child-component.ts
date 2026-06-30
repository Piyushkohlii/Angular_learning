import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-a13-child-component',
  imports: [],
  templateUrl: './a13-child-component.html',
  styleUrl: './a13-child-component.css',
})
export class A13ChildComponent {
  name = input<string>("");

  msg=signal<string>("Hello parent");

  showMessage(){
    this.msg.set(" this msg is updated by child component")
  }
}
