import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-a22-route-params',
  imports: [],
  templateUrl: './a22-route-params.html',
  styleUrl: './a22-route-params.css',
})
export class A22RouteParams {
  productId !: string;
  constructor(private route : ActivatedRoute){
    // this.productId = this.route.snapshot.paramMap.get('id') || '';
    this.route.paramMap.subscribe((params)=>{
      this.productId = params.get('id') || '';
    })
  }

}
