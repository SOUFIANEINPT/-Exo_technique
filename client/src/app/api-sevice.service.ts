import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from './response';

@Injectable()
export class ApiSeviceService {
  configUrl="http://localhost:3000/api/tasks";
  
  constructor(private http: HttpClient) { }

  GetData()
  {
    let headers = new HttpHeaders();
    headers=headers.set('Accept', "application/json");
    return this.http.get<Response>(this.configUrl,{
      observe:'body',
      responseType:'json',
      headers:headers
    });
  }

}
