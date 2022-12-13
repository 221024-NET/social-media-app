import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { FormControl } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css', '../../app.component.css'],
  providers: [LoginServiceService]
})
export class LoginPageComponent implements OnInit {
  formdata: any;
  submitted = false;
  formUser: User = new User(0, "", "");
  loggedInUser = new User(0, "", "");

  constructor(private loginService : LoginServiceService) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      username: new FormControl(""),
      password: new FormControl("")
    });
  }

  register(): void {

  }

  onSubmit(data: any) {
    this.submitted = true;
    this.formUser.username = data.username;
    this.formUser.password = data.password;

    this.loginService.login(this.formUser).subscribe(
      response => {
        console.log(response);
      }
    )
    
    console.log(this.formUser.username);
    console.log(this.formUser.password);
    console.log(this.formUser.user_id);
  }

  

  

}
