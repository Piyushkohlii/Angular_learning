import { Component } from '@angular/core';

@Component({
  selector: 'app-a7-for-loops',
  imports: [],
  templateUrl: './a7-for-loops.html',
  styleUrl: './a7-for-loops.css',
})

export class A7ForLoops {
  items = ['html', 'css' , 'javscript'];

  user=[
    {name:"piyush",age:23},
    {name:"joshn",age:40},
    {name:"mohit" , age:78}
  ]

  fruits= ["apple" , "banana" , "guava", "strawberry"];

  onDelete(i:number){
    this.fruits.splice(i,1)
  }

  languages = ["html" , "css","javascript","python"]
  


}
