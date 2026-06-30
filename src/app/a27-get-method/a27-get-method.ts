import { Component, inject } from '@angular/core';
import { User } from '../user';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-a27-get-method',
  imports: [],
  templateUrl: './a27-get-method.html',
  styleUrl: './a27-get-method.css',
})
export class A27GetMethod {

  // getting data with subscribe 

  // users:any[] = [];
  // constructor(private userService : User){}
  // ngOnInit(){
  //   console.log("ngOnInit called");
  //   this.userService.getUsers().subscribe((data)=>{
  //     this.users = data as any[];
  //   })
  // }

  //getting data with signals

  userService = inject(User);
  users : any = toSignal(this.userService.getUsers());

}
