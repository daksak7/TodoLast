import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private REST_API_SERVER = "https://animechan.vercel.app/api/random";

  
  constructor(private http: HttpClient) { }


  public sendGetRequest(){
    return this.http.get(this.REST_API_SERVER);
  }
}
