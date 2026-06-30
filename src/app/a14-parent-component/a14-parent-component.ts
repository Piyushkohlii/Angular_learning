import { Component } from '@angular/core';
import { A13ChildComponent } from '../a13-child-component/a13-child-component';

@Component({
  selector: 'app-a14-parent-component',
  imports: [A13ChildComponent],
  templateUrl: './a14-parent-component.html',
  styleUrl: './a14-parent-component.css',
})
export class A14ParentComponent {
  username:string = "piyush";
}
