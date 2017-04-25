import { Component } from '@angular/core';
import '../../../public/css/styles.css';

import { Todo } from '../shared/Todo';

const list: Todo[] = [
    {
        title:'task 1',
        completed: true
    },
    {
        title:'task 2',
        completed: true
    },
    {
        title:'task 3',
        completed: false
    },
    {
        title:'task 4',
        completed: false
    }

];
@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class ListComponent {
    list: Todo[] = list;
}