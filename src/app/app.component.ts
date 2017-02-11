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

  constructor(private http: Http) {

  }

  ngOnInit() {
    let headers = new Headers({
      'Authorization': 'token a7a7ce43-d479-4381-b550-72f448f49449'
    });
    let options = new RequestOptions({
      headers: headers
    })
    this.http.get('/me/todomvc0211', options)
      .subscribe(res => {
        this.todos = res.json();
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

  save() {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'token a7a7ce43-d479-4381-b550-72f448f49449'
    });
    let options = new RequestOptions({
      headers: headers
    })
    this.http.post('/me/todomvc0211', this.todos, options)
      .subscribe();
  }
}
