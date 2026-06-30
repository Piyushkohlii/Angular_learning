import { Component } from '@angular/core';
import { CounterStore } from '../a15_core/store/counter';
import { UserStore } from '../a15_core/store/user';

@Component({
  selector: 'app-a15-signal-store',
  imports: [],
  templateUrl: './a15-signal-store.html',
  styleUrl: './a15-signal-store.css',
})
export class A15SignalStore {
  // constructor(public counterStore : CounterStore){}

  constructor(public userStore : UserStore){}

}
