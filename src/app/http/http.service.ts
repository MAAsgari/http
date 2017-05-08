import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData() {
    return this.http.get("https://angular2-ali.firebaseio.com/title.json")
      .map((res: Response) => res.json());
    //.map(res => res.json());
  }

  sendData(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("https://angular2-ali.firebaseio.com/user.json", body, {
      headers: headers
    })
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    // Lahni way=> In a real world app, we might use a remote logging infrastructure
    // let errMsg: string;
    // if (error instanceof Response) {
    //   const err = error.json() || JSON.stringify(error) || '';
    //   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    // } else {
    //   errMsg = error.message ? error.message : error.toString();
    // }
    console.error(error);
    return Observable.throw(error);
  }

  getUserInfo() {
    return this.http.get('https://angular2-ali.firebaseio.com/user.json')
      .map(res => res.json());
  }

}
