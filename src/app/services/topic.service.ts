import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class TopicService {
  url:string='http://10.40.4.34:3001/topic';
  constructor(private http:HttpClient) { }
  getAllTopic(callback){
    let params=new HttpParams().set('myParam','myValue');
    this.http.post(this.url+'/topicbyattent',{params:params}).subscribe(
      function (result) {
        callback(result);
      }),
      function (error) {
        console.log("话题没有返回");
      }
  }
  getTopicById(id,callback){
    this.http.post(this.url+'/gettopicbyid',id).subscribe(
      function (result) {
        callback(result);
      }),
      function (error) {
        console.log("话题没有返回");
      }


  }

  alltopics(callback){
    let params = new HttpParams().set('myParam', 'myValue');
    this.http.post(this.url+'/alltopics',{params:params}).subscribe(
      function (result) {
        callback(result);

      },
      function (error) {
        console.log(error.message);
      }
    );
  }


  searchTopic(searchCon,callback){
    this.http.post(this.url+'/searchtopic',searchCon).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }

}
