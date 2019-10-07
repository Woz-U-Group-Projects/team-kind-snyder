import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  apiUrl: string = "http://localhost:5000/controller/account"

  constructor(private auth: AuthService) { }

  // apiUrl: string = "http://localhost:5000/controller/account"

  ngOnInit() {}
    AuthService(event) {
      event.preventDefault()
      console.log(event)
    }
  }



// this._http.getPost().subscribe(data => {
//   this.image = data;
//   console.log(this.image);
// })