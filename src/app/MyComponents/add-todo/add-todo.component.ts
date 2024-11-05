import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
//import todo
import { todo } from '../../todo';
//import forms module
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title!: string;
  desc!:string;
  @Output() todoAdd: EventEmitter<todo> = new EventEmitter<todo>();

  constructor(){

  }

ngOnInit(): void {
  throw new Error('Method not implemented.');
}
onSubmit() {
  const todo = {
    sno: 8,
    title: this.title,
    desc: this.desc,
    active: true
  }
  this.todoAdd.emit(todo);
}
}
