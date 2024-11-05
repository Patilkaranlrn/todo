import { Component, Input, OnInit, Output, EventEmitter, TemplateRef } from '@angular/core';
import { todo } from '../../todo';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { CommonModule, NgIfContext } from '@angular/common';
import { AddTodoComponent } from "../add-todo/add-todo.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemComponent, CommonModule, AddTodoComponent, FormsModule],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem!: string | null;
  todos: todo[];
  
  @Input() todo: any;
  @Output() todoDelete: EventEmitter<todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<todo> = new EventEmitter();

  elseBlock: TemplateRef<NgIfContext<boolean>> | null | undefined;
  
  constructor() {
    // Check if localStorage is available
    if (typeof window !== 'undefined' && localStorage) {
      this.localItem = localStorage.getItem("todos");
      this.todos = this.localItem ? JSON.parse(this.localItem) : [];
    } else {
      this.todos = [];
    }
  }
  
  ngOnInit(): void {
    // Initialization logic here
  }

  deletetodo(todo: todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }

  addtodo(todo: todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggletodo($event: any,todo: todo) {
    console.log($event)
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
