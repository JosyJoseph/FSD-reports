import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { RequestOptions } from '@angular/http';
import { Users } from '../../entities/users';
import { Observable } from 'rxjs/Observable';
import { UserEdit } from '../../entities/useredit';
import { Status } from '../../entities/status';
import { Options } from 'selenium-webdriver/chrome';
import { environment } from '../../../environments/environment';
import { Project } from '../../entities/project';
import { ProjectEdit } from '../../entities/projectedit';
import { TaskModel } from '../../entities/task';
import { ParenTask } from '../../entities/parent-task';
import { TaskEdit } from '../../entities/task-edit';

@Injectable()
export class ViewTaskService {
  constructor(private http: HttpClient) {}
  apiEndPOint:String='http://localhost:61734';
 

  getAllProject(): Observable<Project[]> {
   
    return this.http.get<Project[]>(this.apiEndPOint+"/api/getAllProjects");
    
  }


  getAllTasks(): Observable<TaskModel[]> {
   
    return this.http.get<TaskModel[]>(this.apiEndPOint+"/api/getAllTasks");
    
  }


  updateTask(task:TaskModel): Observable<TaskEdit> {
   
    return this.http.post<TaskEdit>(this.apiEndPOint+"/api/updateTask",task);
    
  }


  getAllParentTasks(): Observable<ParenTask[]> {
   
    return this.http.get<ParenTask[]>(this.apiEndPOint+"/api/getAllParentTasks");
    
  }
}


