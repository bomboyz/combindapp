import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalProvider {

// global variable
public baseURLAPI:string ="http://localhost/combindrestapi/"
public authkey:string="Basic YWRtaW46MTIzNDU2"
}