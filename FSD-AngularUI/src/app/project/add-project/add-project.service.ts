import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserEdit } from '../../entities/useredit';
import { RequestOptions } from '@angular/http';
import { Users } from '../../entities/users';
import { Status } from '../../entities/status';
import { Options } from 'selenium-webdriver/chrome';
import { environment } from '../../../environments/environment';
import { Project } from '../../entities/project';
import { ProjectEdit } from '../../entities/projectedit';

@Injectable()
export class AddProjectService {
  constructor(private http: HttpClient) {}
  apiEndPOint:String='http://localhost:61734';
  getUsers(): Observable<Users[]> {
   
    return this.http.get<Users[]>(this.apiEndPOint+"/api/getAllUsers");
    
  }
  updateProject(proj:Project): Observable<ProjectEdit> {
    
    console.log(proj);
    return this.http.post<ProjectEdit>(this.apiEndPOint+"/api/updateProject",proj );
  }
  getAllProject(): Observable<Project[]> {
   
    return this.http.get<Project[]>(this.apiEndPOint+"/api/getAllProjects");
    
  }

}


