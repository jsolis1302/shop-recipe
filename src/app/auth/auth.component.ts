import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() { }

  isLoginMode = true;
  ngOnInit() {
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

}