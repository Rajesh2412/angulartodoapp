import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-todotab',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule,CommonModule],
  templateUrl: './todotab.component.html',
  styleUrl: './todotab.component.scss'
})
export class TodotabComponent{
  

  @Input() todoType!: boolean ;
  @Output() todoTabAction = new EventEmitter<any>();

  isClicked :boolean = false;

  newTodoForm = new FormGroup({
    TodoName : new FormControl(''),
    TodoDescription :  new FormControl('')
  })
  
  addTodosClicked(){
    this.isClicked = !this.isClicked;
  }

  formSubmit(){
    const formData = {
      todoName : this.newTodoForm.value.TodoName,
      todoDescription : this.newTodoForm.value.TodoDescription
    }
    this.todoTabAction.emit(formData)
    this.addTodosClicked();
    this.newTodoForm.reset();
    
  }


}
