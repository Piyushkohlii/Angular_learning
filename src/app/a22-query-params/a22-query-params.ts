import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-a22-query-params',
  imports: [],
  templateUrl: './a22-query-params.html',
  styleUrl: './a22-query-params.css',
})
export class A22QueryParams {
  category : string | null = null;
  sort : string | null = null;
  constructor(private route : ActivatedRoute){
    this.route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
      this.sort = params.get('sort');
    })
  }

}
