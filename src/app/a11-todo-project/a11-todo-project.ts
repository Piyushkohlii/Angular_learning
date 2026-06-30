import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-a11-todo-project',
  imports: [],
  templateUrl: './a11-todo-project.html',
  styleUrl: './a11-todo-project.css',
})
export class A11TodoProject {
  todo = signal<string[]>([]);

  newItem = signal<string>("")

  addTodo(){
    this.todo.update(items => [...items , this.newItem()])
  }

  onDelete(i:number){
    this.todo.update(items => 
      items.filter((_,index) => (index !== i))
    );
  }

  isChecked = signal<boolean>(false);
  onCheck(){
    this.isChecked.set(!this.isChecked())
  }
}