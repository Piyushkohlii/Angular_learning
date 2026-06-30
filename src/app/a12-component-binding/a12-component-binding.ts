import { Component, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-a12-component-binding',
  imports: [],
  templateUrl: './a12-component-binding.html',
  styleUrl: './a12-component-binding.css',
})
export class A12ComponentBinding {
  isLoggedIn = signal(false);

  items = signal<string[]>([
    "angular",
    "react",
    "vue"
  ])

  role = signal<'admin' | 'user'>('user');

  features =signal<string[]>([
    "Dashboard",
    "Profile",
    "Settings"
  ]);

  makeAdmin(){
    this.role.set('admin')
    this.features.set([
      "Dashboard",
      "Profile",
      "Settings",
      "Admin Pannel",
      "User management"
    ])
  }

  makeUser(){
    this.role.set('user')
    this.features.set([
      "Dashboard",
      "Profile",
      "Settings"
    ])
  }
}
