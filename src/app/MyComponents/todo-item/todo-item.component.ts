import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { todo } from '../../todo';
import { AddTodoComponent } from "../add-todo/add-todo.component"; 
//import forms module
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [AddTodoComponent, FormsModule, CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: todo;
  @Input() i!: number;
  //create an output function
  @Output() todoDelete: EventEmitter<todo> = new EventEmitter<todo>();
  @Output() todoCheckbox: EventEmitter<todo> = new EventEmitter;
todos: any;
  constructor(){

  }
  ngOnInit(): void {
}
//create an onclick function
onClick(todo: any){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggered");
  }

onCheckboxClick(todo: any){
  console.log(todo);
  this.todoCheckbox.emit(todo);

}

}
