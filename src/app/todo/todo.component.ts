import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-todo',
  template: `
    <p>
      todo! {{index}}
    </p>
  `,
  styles: [`
    * {
      color: red
    }
  `]
})
export class TodoComponent implements OnInit, OnDestroy {
  @Input() index;
  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
