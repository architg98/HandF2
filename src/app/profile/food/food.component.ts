import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  fullName = 'Virat Kohli';
  username = 'viratkohli';
  emailAddress = 'virat.kohli@bcci.com';
  age = '32';
  gender = 'Male';
  weight = '137';
  height = '1.75';

  todoText: string = "";
  todoList: any = [];
  isTodoListEmpty = false;

  constructor() { }

  ngOnInit() {
    this.isTodoListEmpty=true;
  }

  onAddTodoText() {
    if (this.todoText!=""){
      console.log("adding the todoText - ", this.todoText);
      let todoObj = {todoId: this.todoList.length, text: this.todoText, isCompleted: false};

      this.todoList.push(todoObj);
      this.todoText = "";
      this.isTodoListEmpty=false;  
    }
  }
  
  onClearTodoText() {
    console.log("clearing the todoList - ", this.todoList);
    this.todoList=[];
    this.todoText="";
    this.isTodoListEmpty=true;
  }

}
