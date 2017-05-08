import { Component, OnInit } from '@angular/core';
// import { Response } from '@angular/http';

import { HttpService } from './http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
  providers: [HttpService]
})
export class HttpComponent implements OnInit {
  myUsersInfo: any[] = [];
  //get data from service without subscribe we use pipe async that provide us subscribe and only work with the string
  asyncString = this.httpService.getData();

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData()
      .subscribe(
      res => {
        console.log(res);
      }
      //(data: Response) => console.log(data)
      );
  }

  onSubmit(username: string, email: string) {
    this.httpService.sendData({ username: username, email: email })
      .subscribe(
      res => console.log(res),
      err => console.log(err));
  }

  onGetUserInfo() {
    this.httpService.getUserInfo()
      .subscribe(res => {
        let myarr = [];
        for (let key in res) {
          myarr.push(res[key]);
        }
        this.myUsersInfo = myarr;
      });
  }
}
