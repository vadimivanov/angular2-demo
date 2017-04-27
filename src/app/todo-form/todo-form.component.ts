import { Component } from '@angular/core';
import '../../../public/css/styles.css';
import { TodoService } from '../shared/todo.service';

@Component({
    selector: 'todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.css']
})
export class FormComponent {
    
    title: string = '';
    
    constructor(private todoService: TodoService) {}

    onSubmit() {
        this.todoService.createTodo(this.title);
    }
}