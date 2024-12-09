import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TodoList } from "../interfaces/todolist";

@Injectable({
    providedIn:'root'
})

export class HttpService{

    apiURL  = 'https://blonde-trisha-rajesh2412-bf148a4a.koyeb.app'
    // apiURL = "localhost:8080"

    constructor(private http: HttpClient){}

    getCall(): Observable<any> {

        return this.http.get(`${this.apiURL}/getTodos`)
    }

    postCall(todoItem:any):Observable<any>{
        return this.http.post(`${this.apiURL}/addTodos`,todoItem)
    }

    deleteCall(id: number):Observable<any> {
        return this.http.delete(`${this.apiURL}/delete/${id}`)
    }

    updateCall(id:number,todoItem:any):Observable<any>{
        return this.http.put(`${this.apiURL}/updateTodo/${id}`,todoItem)

    }
}