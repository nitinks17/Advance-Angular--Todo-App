import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoInterface } from '../todo/todointerface';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
@Input()  Todo:any;
@Output() TodoDelete:EventEmitter<TodoInterface>=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    console.log("TodoArr",this.Todo)
  }

  onDelete(Todo:TodoInterface){
    console.log("on delete has clicked")
  }
}
