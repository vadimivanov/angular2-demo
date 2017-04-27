import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './shared/data';

import { AppComponent } from './app.component';
import { FormComponent } from './todo-form/todo-form.component';
import { ListComponent } from './todo-list/todo-list.component';
import { ItemComponent } from './todo-item/todo-item.component';
import { TodoService } from './shared/todo.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
        AppComponent,
        FormComponent,
        ListComponent,
        ItemComponent
    ],
    providers: [TodoService],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
