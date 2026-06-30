import { Component, input } from '@angular/core';

@Component({
  selector: 'app-a17-card-component',
  imports: [],
  templateUrl: './a17-card-component.html',
  styleUrl: './a17-card-component.css',
})
export class A17CardComponent {
  title = input<string>();
  description = input<string>();
}
