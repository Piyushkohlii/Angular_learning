import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-a2-events',
  imports: [],
  templateUrl: './a2-events.html',
  styleUrl: './a2-events.css',
})
export class A2Events {
  // count = 0;
  // increment(){
  //   this.count++;
  // }
  count = signal(0);
  increment(){
    this.count.update((c)=> c+1);
  }

  showEvent(e : any){
    console.log(e);
  }

  username = "";
  updateUser(value:string){
    this.username = value;
  }

  email = "";
  maildis(em : string){
      this.email = em;
  }
  
  formsubmitted = false;
  handleSubmit(e : any){
    e.preventDefault();
    this.formsubmitted = true;
  }

  onKeyUp(event : any){
    console.log("key up event : ",event.key)
  }

  onHover(){
    console.log("hover event")
  }

  onLeave(){
    console.log("mouse has left")
  }

  onBlur(){
    console.log("user has left typing ")
  }

  onFocus(){
    console.log("user is ready for typing")
  }
}
