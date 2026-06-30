import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn : 'root',
})

export class CounterStore{
    count = signal<number>(0);

    increment(){
        this.count.update(value=>value+1);
    }

    decrement(){
        if(this.count()>0) this.count.update(value=>value-1);
    }

    reset(){
        this.count.set(0);
    }
}

