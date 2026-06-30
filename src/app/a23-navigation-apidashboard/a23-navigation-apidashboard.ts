import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a23-navigation-apidashboard',
  imports: [],
  templateUrl: './a23-navigation-apidashboard.html',
  styleUrl: './a23-navigation-apidashboard.css',
})
export class A23NavigationAPIdashboard {
  constructor(private router : Router){}

  openProduct(){
    this.router.navigate(['product',101]) //input is given in the form of an array 
  }

  goToLogin(){
    this.router.navigateByUrl('/login') //input is given in the form of string
  }
}
