import { Component, OnInit } from '@angular/core';
import { TodoInterface } from './todointerface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoArr:TodoInterface[]=[]
  constructor() { }

  ngOnInit(): void {
    this.todoArr=[
      {
        sno:1,
        title:"jogging",
        description:"5km",
        active:true
  
      },
      {
        sno:2,
        title:"coding",
        description:"angular 14",
        active:true
      },
      
    ]
  }

  deleteTodoelem(item:TodoInterface){
    const index=this.todoArr.indexOf(item)
    this.todoArr.splice(index,1)
    console.log("item",item)
 
  }

  addTodo(addedtodo:TodoInterface){
    console.log("addedtodo",addedtodo)
this.todoArr.push(addedtodo)
  }
}
