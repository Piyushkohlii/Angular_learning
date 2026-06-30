import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a23-navigation-apilogin',
  imports: [],
  templateUrl: './a23-navigation-apilogin.html',
  styleUrl: './a23-navigation-apilogin.css',
})
export class A23NavigationAPILogin {
  constructor(private router : Router){}
  login(){
    this.router.navigate(['dashboard']);// we can only use navigate inside an array
  }
}
