import { Component } from '@angular/core';

@Component({
  selector: 'app-a4-counter',
  imports: [],
  templateUrl: './a4-counter.html',
  styleUrl: './a4-counter.css',
})
export class A4Counter {
  counter : number = 0 ;

  increase(){
    this.counter++;
  }
  decrease(){
    if(this.counter>0) this.counter--;
  }
  reset(){
    this.counter = 0;
  }
}
