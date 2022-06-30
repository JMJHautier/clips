import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials = {
    email:'',
    password:''
  }
  login($event:Event):void {
    console.log($event)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
