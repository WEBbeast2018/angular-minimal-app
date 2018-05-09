import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <main>
        <app-todo *ngFor="let todo of todoList" [index]="todo"></app-todo>
        <button (click)="removeTodo()">clear todo</button>
    </main>
  `,
    styles: []
})
export class AppComponent {
    todoList = [1, 2, 3, 4];

    removeTodo() {
        this.todoList.pop();
    }
}
