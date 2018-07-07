import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import {ToastController} from 'ionic-angular';
import{GlobalProvider} from'../global/global'
/*
  Generated class for the WebapiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebapiServiceProvider {
baseUrl:any;
  constructor(public http: Http,public toast:ToastController,public global:GlobalProvider) {
   this.baseUrl=this.global.baseURLAPI
  }
  postData(objdata, segment){
    return new Promise((resolve,reject) =>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json;charset=UTF-8');
    headers.append('Authorization', this.global.authkey);
    this.http.post(this.baseUrl+segment, JSON.stringify(objdata) , {headers:headers})
    .subscribe(res => {
    resolve(res.json());
    }, (err) => {
      if(err.status==0)
      {
        this.toast.create({
message:'ติดต่อ API ไม่ได้มีข้อผิดพลาด',
duration:3000
}).present();
      }
    reject(err);
    });
    });
    }
// GET METHOD
getData(segment){
  return new Promise((resolve,reject) =>{
  let headers = new Headers();
  headers.append('Content-Type', 'application/json;charset=UTF-8');
  headers.append('Authorization', this.global.authkey);
  this.http.get(this.baseUrl+segment, {headers:headers})
  .subscribe(res => {
  resolve(res.json());
  }, (err) => {
  reject(err);
  });
  });
  }
}