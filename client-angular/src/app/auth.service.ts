import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './models/project'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = "http://localhost:5000/account/register";
  constructor(private http: HttpClient) { }

  getUserDetails(): Observable<Project[]> {
    // post these datails to API server and return user infor if correct
  
      return this.http.get<Project[]>(this.apiUrl);
    
  }
}
