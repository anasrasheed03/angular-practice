import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseUrl:string = 'https://reqres.in/api/'
  constructor(private http: HttpClient) { }
 
  public login(payload): Observable<any> {
    return this.http.post(this.baseUrl + 'login',payload)
  }

  public register(payload): Observable<any> {
    return this.http.post(this.baseUrl + 'register',payload)
  }

  public getUserList():Observable<any>{
    return this.http.get(this.baseUrl + 'users?page=2')
  }

  public getUserDetail(id):Observable<any>{
    return this.http.get(this.baseUrl + 'users/'+id)
  }

}
