import { Component, computed, signal } from '@angular/core';
import { single } from 'rxjs';

interface User{
  name : string,
  age : number , 
  gender : string,
  city : string,
  isIndian : boolean,
  isRich : boolean
}

@Component({
  selector: 'app-a8-signal',
  imports: [],
  templateUrl: './a8-signal.html',
  styleUrl: './a8-signal.css',
})
export class A8Signal {
  count = signal(10);
  val = 20;

  // count.update(c => c + 1) // signal update

  increment(){
    this.count.update(c=>c+1);
  }
  decrement(){
    if(this.count()>0){
    this.count.update(c=>c-1);
  }
  }
  reset(){
    this.count.set(0);
  }

  // we have to define or declare the singal alwars with theri datatype like

  count2 = signal<number>(0);
  name = signal<string>("Piyush");
  isHandsome = signal<boolean>(true);
  numbers = signal<number[]>([1,2,3,4,5]);
  user = signal<{name : string , age:number}>({name : "Piyush", age : 45}) // if suppose there is a lot of keys and theri value so we cant write all of them on by one , there is another method for it which is known as interface
  user2 = signal<User>({
    name : "piyush",
    age : 45 , 
    gender : "male",
    city : "Pithoragarh",
    isIndian : true,
    isRich : true
  })

  changeArray(){
    this.numbers.set([12,13,34,34,4,5])
  }

  addValue(num:number){
    this.numbers.update(arr => [...arr,num])
  }

  //computed 

  single = signal<number>(2);
  double = computed<number>(()=>this.single()*2);
  triple = computed<number>(()=>this.single()*3);

  // double = this.single()*2;
  // triple = this.single()*3; if we do this we wont be able to change the valu of double and triple with signle so we have to use computed

  increment2(){
    this.single.update(c=>c+1);
  }

  firstName = signal<string>("Piyush");
  lastName = signal<string>("kohli");

  fullName = computed<string>(()=>`${this.firstName()} ${this.lastName()}`)

  price =  signal<number[]>([10,20,30,40,50]);

  total = computed<number>(()=>{
    return this.price().reduce((acc,curr) => acc + curr, 0);
  });

  // two way binding

  name2=signal("");

  updateName(value:string){
    this.user2.update(user => ({...user, name:value}))
  } 

  updateAge(){
    this.user2.update(user => ({...user , age : user.age + 1}))
  }



}
