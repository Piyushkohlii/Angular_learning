import { afterEveryRender, afterNextRender, Component, Input, input, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-a25-life-cycles-child',
  imports: [],
  templateUrl: './a25-life-cycles-child.html',
  styleUrl: './a25-life-cycles-child.css',
})
export class A25LifeCyclesChild {
  @Input() title:string= ""
  constructor(){
    console.log("1.Constructor");
    afterNextRender(()=>{
      console.log("4.afterNextRender")
    })
    afterEveryRender(()=>{
      console.log("4.afterEveryRender")
    })
  }
  ngOnChanges(change : SimpleChanges){
    console.log("2.ngOnChanges" , change);
  }
  ngOnInit(){
    console.log("3.ngOnInit");
  }
  ngOnDestroy(){
    console.log("5.ngOnDestroy")
  }
}
