import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  template: `
    <p>
      todo! {{index}}
    </p>
  `,
  styles: []
})
export class TodoComponent implements OnInit {
  @Input() index;
  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
