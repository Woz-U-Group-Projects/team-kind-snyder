// import { Injectable } from '@angular/core';
// import { Project } from './models/project';
// import { Observable } from 'rxjs';
// import { HttpClient } from 'selenium-webdriver/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {

//   apiUrl: string = "http://localhost:5000/account/login";
//   constructor(private http: HttpClient) { 
//     // POST to http://localhost:5000/account/login
//     // get back a jtw
//     let token = "";
//     localStorage.setItem("jtw",token)
//     let retrievedToken = localStorage.getItem("jwt");
//     // logout
//     localStorage.removeItem("jwt");
//   }

//   // apiUrl: string = "http://localhost:5000/account/login";

//     getUser(): Observable<Project[]> {
//       let retrievedToken = localStorage.getItem("jwt");
//       const options = {
//         "Authorization":"Bearer " + retrievedToken
      
//       // const options = {
//       //   headers = new Headers(headers)
//       }
//       return this.http.get<Project[]>(this.apiUrl,options);


//     }

// }
