import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HttpService {
BaseUrl=environment.baseUrl;
  constructor( private http:HttpClient) { }
 
  Post(url, data) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      })
    }
    console.log(" data in http ", this.BaseUrl + url, data);


    return this.http.post(this.BaseUrl + url, data, options);

  }

  Get(url){
    return this.http.get(this.BaseUrl+url)
  }

  Put(url,data){
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImVtYWlsIjoibWluZXNobWFuZTk0QGdtYWlsLmNvbSIsImlkIjoiNjBhM2Y5OTc2ZDgyMGIxNzE4YjA0Mzk2In0sImlhdCI6MTYyMTM1OTMyNSwiZXhwIjoxNjIxNDQ1NzI1fQ.A4wbGYX0MLjIGtU-M2R1qCPCMbBex3VWmiBWCRNN5NQ'
  
      })
    }
    return this.http.put(this.BaseUrl+url,data,options)
  }

}
