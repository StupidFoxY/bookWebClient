import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable()
export class UsersService {

  url:string='http://10.40.4.34:3001/users';
  constructor(
    private http:HttpClient
  ) {
  }

  login(user,callback){
    this.http.post(this.url+'/login',user).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }

  addUser(user,callback){
    this.http.post(this.url+'/addUser',user).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }

  editUser(){

  }

}
