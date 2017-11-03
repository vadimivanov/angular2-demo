import { Component, OnInit } from '@angular/core';
import '../../../public/css/styles.css';

import { Todo } from '../shared/Todo';
import { TodoService } from '../shared/todo.service';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class ListComponent {
    list: Todo[];

    constructor(private todoService: TodoService) {
        this.list = [];
    }

    ngOnInit() {
        this.todoService.getList().subscribe(list => this.list = list);
    }

    delete(todo: Todo) {
        this.todoService.deleteTodo(todo).subscribe(list => {
            let index = this.list.indexOf(todo);

            if (index > -1) {
                this.list.splice(index, 1);
            }   
        });
    }

    toggle(todo: Todo) {
        this.todoService.toggleTodo(todo).subscribe(res => {
            todo.completed = !todo.completed
        });
    }
}