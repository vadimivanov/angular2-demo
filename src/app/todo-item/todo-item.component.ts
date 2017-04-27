import { Component, Input, Output, EventEmitter } from '@angular/core';
import '../../../public/css/styles.css';
import { Todo } from '../shared/Todo';

@Component({
    selector: 'todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
})
export class ItemComponent {
    @Input() todo: Todo;
    @Output() delete = new EventEmitter();
    @Output() toggle = new EventEmitter();

    onToggle() {
        this.toggle.emit(this.todo);

    }

    onDelete() {
        this.delete.emit(this.todo);
    }
}