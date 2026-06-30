import { Component, inject, signal } from '@angular/core';
import { UserService } from '../user-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { User } from '../model/user';
import { isActive } from '@angular/router';

@Component({
  selector: 'app-a28-json-server',
  imports: [CommonModule],
  templateUrl: './a28-json-server.html',
  styleUrl: './a28-json-server.css',
})
export class A28JsonServer {
  // userService = inject(UserService);
  // // user : any = toSignal(this.userService.getUser(), { initialValue: [] });
  // user= toSignal<User[]>(this.userService.getUser());

  user= signal<User[]>([]);
  name = signal<string>("");
  email = signal<string>("");

  editingUpdateID = signal<number|null>(null);

  constructor(private userService : UserService){}

  ngOnInit(){
    this.loadUsers();
  }

  loadUsers(){
    this.userService.getUser().subscribe(data=>{
      this.user.set(data);
    })
  }

  //click edit button
  editUser(user:User){
    this.editingUpdateID.set(user.id!);
    this.name.set(user.name);
    this.email.set(user.email);
  }

  //add and update user
  submitForm(){
    const payload : User = {
      name : this.name(),
      email : this.email(),
    };
    //update
    if(this.editingUpdateID()!== null){
      this.userService.updateuser(
        this.editingUpdateID()!,
        payload
      ).subscribe(()=>{
        alert("user updated successfully");
        this.afterSave()
        
      })
    }
    //add
    else {this.userService.addUser(payload).subscribe(()=>{
      this.afterSave();
    })}
    
  }

  afterSave(){
      this.loadUsers();
        this.name.set('');
        this.email.set('');
        this.editingUpdateID.set(null);
    }


    toggleStatus(user : User){
      this.userService.updateUserStatus(user.id!,!user.isActive).subscribe(()=>{
        this.user.update(list=>{
          list.map(u=>{
            u.id === user.id ? {...user,isActive : !u.isActive} : u
          })
        })
      })
    }

  
}
