import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css', '../../app.component.css']
})
export class LoginPageComponent implements OnInit {
  username: any;
  password: any;
  formdata: any;
  //user = new User(1, "", "");

  constructor() { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      username: new FormControl(""),
      password: new FormControl("")
    });
  }

  register(): void {

  }

  onSubmit(data: any) {
    this.username = data.username;
    this.password = data.password;
    console.log(this.username);
    console.log(this.password);
  }

}
