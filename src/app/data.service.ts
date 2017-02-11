import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  load() {

    let headers = new Headers({
      'Authorization': 'token a7a7ce43-d479-4381-b550-72f448f49449'
    });
    let options = new RequestOptions({
      headers: headers
    });

    return this.http.get('/me/todomvc0211', options)
      .map(x => x.json());

  }


  save(todos) {

    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'token a7a7ce43-d479-4381-b550-72f448f49449'
    });
    let options = new RequestOptions({
      headers: headers
    })

    this.http.post('/me/todomvc0211', todos, options)
      .subscribe();

  }
}
