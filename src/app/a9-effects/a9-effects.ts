import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-a9-effects',
  imports: [],
  templateUrl: './a9-effects.html',
  styleUrl: './a9-effects.css',
})
export class A9Effects {
  // count = signal(0);

  // constructor(){
  //   effect(()=>{ //effect is called everytime signal is updated or called
  //     console.log("count value : ",this.count())
  //   })
  // }

  // increment(){
  //   this.count.update(c=>c + 1 );
  // }

  // isDark = signal(false);

  // constructor(){
  //   effect(()=>{
  //     if(this.isDark()){
  //       document.body.style.backgroundColor = 'black';
  //       document.body.style.color = 'white';
  //     }
  //     else{
  //       document.body.style.backgroundColor = 'white';
  //       document.body.style.color = 'black';
  //     }
  //   })
  // }

  // toggle(){
  //   this.isDark.update(mode => !mode)
  // }

  message = signal("");

  constructor(){
    effect(()=>{
      if(this.message()){
        setTimeout(()=>{
          this.message.set("")
        },1000);
      }
    })
  }

  showMessage(){
    this.message.set("HELLO, THIS IS A TEMPRORARY MESSAGE")
  }
}
