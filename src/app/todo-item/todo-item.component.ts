import { Component } from '@angular/core';
import '../../../public/css/styles.css';
import { Todo } from '../shared/Todo';

@Component({
    selector: 'todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
})
export class ItemComponent {
    item: Todo = new Todo('task');
}