import { Pipe, PipeTransform } from '@angular/core';
import { TodoList } from '../interfaces/todolist';

@Pipe({
    name : 'filter',
    standalone: true,
})

export class FilterPipe implements PipeTransform {
    transform(value: TodoList[], searchText: string): TodoList[] {
        if(searchText == "") return value;
        searchText = searchText.toLowerCase();
        return value.filter(it => {
           return it.todoName.toLowerCase().includes(searchText)
        })
        
    }
}
