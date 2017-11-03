import { Todo } from './Todo';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class TodoService {
    private apiUrl = 'api/list';
    
    list: Todo[] = [];
    
    constructor(private http: Http) {}

    getList(): Observable<Todo[]> {
        return this.http.get(this.apiUrl)
                        .map(res => res.json().data as Todo[])
                        .map(list => this.list = list)
                        .catch(this.handleError);
    }

    createTodo(title: string) {
        let headers = new Headers({'ContentType': 'application/json'});
        let options = new RequestOptions({headers});
        let todo = new Todo(title);
        
        this.http.post(this.apiUrl, todo, options)
                .map(res => res.json().data)
                .map(list => this.list.push(todo))
                .catch(this.handleError)
                .subscribe();
    }

    deleteTodo(todo: Todo) {
        let headers = new Headers({'ContentType': 'application/json'});
        let options = new RequestOptions({headers});
        let url = `${this.apiUrl}/${todo.id}`;

        return this.http.delete(url, options)
                .catch(this.handleError);

    }

    toggleTodo(todo: Todo) {
        
        let headers = new Headers({'ContentType': 'application/json'});
        let options = new RequestOptions({headers});
        let url = `${this.apiUrl}/${todo.id}`;

        return this.http.put(url, todo, options)
            .map(res => {
                todo.completed = !todo.completed
            })
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('error! ', error);
        return Observable.throw(error.message || error);
    }
}