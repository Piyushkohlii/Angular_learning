import { Component } from '@angular/core';

@Component({
  selector: 'app-a5-get-set-values',
  imports: [],
  templateUrl: './a5-get-set-values.html',
  styleUrl: './a5-get-set-values.css',
})
export class A5GetSetValues {
  name : string = "";

  updateName(val:string){
    this.name = val;
  }

  city:string = "";
  email : string = "";

  getEmail(val:string){
    this.email=val
  }

}
