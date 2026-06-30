import { Component, effect, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-a24-signal-routing',
  imports: [],
  templateUrl: './a24-signal-routing.html',
  styleUrl: './a24-signal-routing.css',
})
export class A24SignalRouting {
  search = signal('');
  products = signal<string[]>(['phone','laptop','tablet','monitor','keyboard']);
  filtered = signal<string[]>(this.products());

  constructor(
    private route : ActivatedRoute,
    private router : Router
  ){
    //URL to signals
    this.route.queryParamMap.subscribe(params=>{
      this.search.set(params.get('search') || '');
    })
    //signals to UI update
    effect(()=>{
      const value = this.search().toLowerCase();
      this.filtered.set(
        this.products().filter(p=> p.toLowerCase().includes(value))
      )
    })
  }

  updateURL(){
    this.router.navigate([],{
      queryParams : {search : this.search()},
    })
  }
}
