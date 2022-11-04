import { Component, OnInit } from '@angular/core';
import { TodoInterface } from './todointerface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  alertifsame:boolean=false;
  localItem:any;
  todoArr:TodoInterface[]=[]
  constructor() { 
    
  }

  ngOnInit(): void {
    this.localItem=localStorage.getItem("todosElements")
    console.log("fff",this.localItem)
    if(this.localItem===null){
      this.todoArr=[]
    }
    else{
      this.todoArr=JSON.parse(this.localItem)
    }
  }

  deleteTodoelem(item:TodoInterface){
    const index=this.todoArr.indexOf(item)
    this.todoArr.splice(index,1)
    console.log("item",item)
    localStorage.setItem("todosElements",JSON.stringify(this.todoArr))
 
  }

  addTodo(addedtodo:TodoInterface){
    
console.log("addedtodo",addedtodo);
let samename=addedtodo.title;
let check=this.todoArr.some(checkifexists)

function checkifexists(elem:any){
  return elem.title===samename
}
console.log("check",check)
console.log("all arr",this.todoArr)
if(!check){
  this.todoArr.push(addedtodo)
  localStorage.setItem("todosElements",JSON.stringify(this.todoArr))
}
else{
  alert("Task already exists,please add different task")
}

  }

  toggleCheckbox(checkeddata:TodoInterface){
    console.log("ddd",checkeddata)
    const index=this.todoArr.indexOf(checkeddata)
    console.log("i",index)
    this.todoArr[index].active=!this.todoArr[index].active
    localStorage.setItem("todosElements",JSON.stringify(this.todoArr))

  }
}
