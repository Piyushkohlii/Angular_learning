import { Component } from '@angular/core';
import { Auth } from '../auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a21-route-guard-login',
  imports: [],
  templateUrl: './a21-route-guard-login.html',
  styleUrl: './a21-route-guard-login.css',
})
export class A21RouteGuardLogin {
  constructor(private auth : Auth,private router : Router){}
  
  login(){
    this.auth.login();
    this.router.navigate(['/dashboard']);
  }
}
