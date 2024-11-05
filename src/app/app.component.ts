import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from "./MyComponents/todos/todos.component";
import { CommonModule, NgFor } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoItemComponent } from "./MyComponents/todo-item/todo-item.component";
//import add-todo
import { AddTodoComponent } from "./MyComponents/add-todo/add-todo.component";
//forms module
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent, CommonModule, TodoItemComponent, AddTodoComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
todos: any;
  constructor(){
    // setTimeout(() => {
    //   this.title = 'Todo App';
    // }, 2000);
  }
}
