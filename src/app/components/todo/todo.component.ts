import { Component, OnInit } from '@angular/core';
import { TodoInterface } from './todointerface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  TodoArr:TodoInterface[]=[]
  constructor() { }

  ngOnInit(): void {
    this.TodoArr=[
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
    const index=this.TodoArr.indexOf(item)
    this.TodoArr.splice(index,1)
    console.log("item",item)
 
  }

  addTodo(addedtodo:TodoInterface){
this.TodoArr.push(addedtodo)
  }
}
