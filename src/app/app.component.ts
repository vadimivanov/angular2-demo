import { Component } from '@angular/core';
import '../../public/css/styles.css';

interface ITodo {
    name: string;
    completed: boolean;
}

const list: ITodo[] = [
    {
        name:'task 1',
        completed: true
    },
    {
        name:'task 2',
        completed: true
    },
    {
        name:'task 3',
        completed: false
    },
    {
        name:'task 4',
        completed: false
    }
    
];
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent { 
    title: string = "App with Webpack";
    list: ITodo[] = list;

    toggle(data: ITodo) {
        data.completed = !data.completed;
    }

    delete(data: ITodo) {
        let index = this.list.indexOf(data);

        if (index > -1) {
            this.list.splice(index, 1);
        }
    }
}
