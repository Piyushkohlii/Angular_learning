import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  apiURL = 'http://localhost:3000/users';
  constructor(private http : HttpClient){}

  // get api
  getUser():Observable<User[]>{
    // return this.http.get<any[]>(this.apiURL);
    return this.http.get<User[]>(this.apiURL);
  }

  //post api
  addUser(user : User):Observable<User>{
    return this.http.post<User>(this.apiURL,user)
  }

  //put api
  updateuser(id:number,user:User):Observable<User>{
    return this.http.put<User>(`${this.apiURL}/${id}`,user)
  }

  //patch api
  updateUserStatus(id:number , status : boolean):Observable<User>{
    return this.http.patch<User>(`${this.apiURL}/${id},{status}`);
  }
}
