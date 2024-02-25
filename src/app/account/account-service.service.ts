import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  apiurl = "https://localhost:44304/api/ToDoAuth"
  constructor(private httpclient: HttpClient) { }

  public getAccountDetails(formdata:any):Observable<any>{
    debugger
    return this.httpclient.post<any>(this.apiurl+"/Login",formdata).pipe(
     tap(response=>{
      debugger;
      if(response && response.token){
        localStorage.setItem('token',response.token);
      }
     })
    );
  }

  public registerUser(formdata:any){
    debugger;
    return this.httpclient.post<any>(this.apiurl+"/Register",formdata).pipe(
      tap(response=>{
        debugger;
        if(response && response.token){
          localStorage.setItem('token',response.token);
        }
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  public logout(){
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    // Check if the token exists in localStorage
    return localStorage.getItem('token') !== null;
  }

}
