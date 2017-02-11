import { DataService } from './data.service';
import { Component } from '@angular/core';

import {Headers, RequestOptions,  Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputHint = 'What needs to be done?';

  todos: any[] = [];

  todo;

  constructor(public datasvc: DataService) {

  }

  ngOnInit() {
    this.datasvc.load().subscribe(values => {
      this.todos = values;
    });
  }

  add(item: HTMLInputElement) {
    if(item.value) {
      // this.todos.push({
      //   value: item.value,
      //   done: false
      // });
      this.todos = [...this.todos, { value: item.value, done: false }];
      item.value = '';
    }
  }

  remove(item) {
    let idx = this.todos.indexOf(item);
    this.todos.splice(idx, 1);

    this.todos = [...this.todos];
  }

  clearCompleted() {
    this.todos = this.todos.filter(v => !v.done);
  }

  toggleAll(status: boolean) {
    this.todos = this.todos.map(v => {
      v.done = status;
      return v;
    });
  }

}
