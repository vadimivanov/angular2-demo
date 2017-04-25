import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './todo-form/todo-form.component';
import { ListComponent } from './todo-list/todo-list.component';
import { ItemComponent } from './todo-item/todo-item.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        FormComponent,
        ListComponent,
        ItemComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
