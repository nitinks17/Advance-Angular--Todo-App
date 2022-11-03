import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoInterface } from '../todo/todointerface';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() todoAdd:EventEmitter<TodoInterface>=new EventEmitter()
  title:string=""
desc:string=""
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todoelem={
      sno:5,
      title:this.title,
      description:this.desc,
      active:true
    }
this.todoAdd.emit(todoelem)
  }
}
