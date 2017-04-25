import { Component } from '@angular/core';
import '../../../public/css/styles.css';


@Component({
    selector: 'todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.css']
})
export class FormComponent {
    
    newTodoTitle: string = '';

    create() {
        
    }
}