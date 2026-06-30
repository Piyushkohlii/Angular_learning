import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-a21-route-guard-profile',
  imports: [RouterLink],
  templateUrl: './a21-route-guard-profile.html',
  styleUrl: './a21-route-guard-profile.css',
})
export class A21RouteGuardProfile {
  canDeactivate(){
    return confirm("do you want to leave this page");
  }
}
