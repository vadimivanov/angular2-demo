import { Todo } from './Todo';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {
    private apiUrl = 'api/list';
    
    list: Todo[] = [];
    
    constructor(private http: Http) {}

    getList(): Promise<Todo[]> {
        return this.http.get(this.apiUrl)
                        .toPromise()
                        .then(res => res.json().data)
                        .then(list => this.list = list)
                        .catch(this.handleError);
    }

    createTodo(title: string) {
        let headers = new Headers({'ContentType': 'application/json'});
        let options = new RequestOptions({headers});
        let todo = new Todo(title);
        
        this.http.post(this.apiUrl, todo, options)
                .toPromise()
                .then(res => res.json().data)
                .then(list => this.list.push(todo))
                .catch(this.handleError);
    }

    deleteTodo(todo: Todo) {
        let headers = new Headers({'ContentType': 'application/json'});
        let options = new RequestOptions({headers});
        let url = `${this.apiUrl}/${todo.id}`;

        this.http.delete(url, options)
                .toPromise()
                .then(res => {
                    let index = this.list.indexOf(todo);
    
                    if (index > -1) {
                        this.list.splice(index, 1);
                    }
                })
                .catch(this.handleError);


    }

    toggleTodo(todo: Todo) {
        
        let headers = new Headers({'ContentType': 'application/json'});
        let options = new RequestOptions({headers});
        let url = `${this.apiUrl}/${todo.id}`;

        this.http.put(url, todo, options)
            .toPromise()
            .then(res => {
                todo.completed = !todo.completed
            })
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('error! ', error);
        return Promise.reject(error.message || error);
    }
}