import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoList } from '../../interfaces/todolist';
import { CommonModule } from '@angular/common';
import { HttpService } from '../../services/http.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/filterPipe.pipe';
import { TodotabComponent } from "../todotab/todotab.component";
@Component({
  selector: 'app-land',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, FilterPipe, TodotabComponent],
  templateUrl: './land.component.html',
  styleUrl: './land.component.scss'
})
export class LandComponent implements OnInit{

  todoList : TodoList[] = [];
  @ViewChild(TodotabComponent) todoModel! : TodotabComponent ;
  

  todoType: boolean = true;

  searchText: string = "";

  constructor(private httpService : HttpService){}

  ngOnInit(){

    this.getTodosApiCall();

  }

  tabActions(e : Event){
    if(this.todoType){
    this.httpService.postCall(e).subscribe((data)=>{
      if( !data.error){
        this.todoModel.isClicked = false;
      }
      this.todoModel.newTodoForm.reset();
    })
    }else{
      
    }
    
  }

  
  getTodosApiCall(){
    this.httpService.getCall().subscribe((data)=>this.todoList = data.data)
  }

  deleteTodo(id: number){
    console.log(id)
      this.httpService.deleteCall(id).subscribe((data)=>{
        this.getTodosApiCall()
      })
  }

  updateTodo(item : TodoList){
    this.todoModel.newTodoForm.setValue({
      TodoDescription : item.todoDescription,
      TodoName : item.todoName
    })
    this.todoModel.todoType = false;
    this.todoModel.addTodosClicked();
  }
}
