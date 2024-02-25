import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  apiurl = "https://localhost:44370/api/ToDoTasks/"
  constructor(private httpclient:HttpClient) { }

  Addtask(formdata:any){
    debugger;
    return this.httpclient.post<any>(this.apiurl+"AddTodoTask",formdata);
  }

  GetTaskList(){
    debugger;
    return this.httpclient.get<any>(this.apiurl+"GetAllTodoTasks");
  }
}
