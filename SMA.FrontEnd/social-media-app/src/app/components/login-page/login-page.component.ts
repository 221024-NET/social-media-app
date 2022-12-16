import { Component, EventEmitter, OnInit, Output, resolveForwardRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { FormControl } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Injectable } from '@angular/core';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Injectable({
  providedIn: 'root'
})

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
  logInResponse: any;
  currentUser: User = new User(0, "", "");
  errorMessage = "";

  constructor(private loginService: LoginServiceService, private router: Router, private dataTransfer: DataTransferService) { }

  @Output() login = new EventEmitter<User>();

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
    if (!this.formdata.valid) {
      this.formdata.markAllAsTouched();
    }
    else {

      this.formUser.username = data.username;
      this.formUser.password = data.password;

      this.loginService.login(this.formUser).subscribe(
        response => {
          this.errorMessage = "";
          this.logInResponse = response;

          this.currentUser.user_id = this.logInResponse.user_id;
          this.currentUser.username = this.logInResponse.username;
          this.currentUser.password = this.logInResponse.password;
          this.currentUser.first_name = this.logInResponse.first_name;
          this.currentUser.last_name = this.logInResponse.last_name;
          this.currentUser.phone_number = this.logInResponse.phone_number;

          //this.login.emit(this.currentUser);
          this.dataTransfer.setData(this.currentUser);
          console.log('setData for ' + this.currentUser.user_id);


          this.router.navigateByUrl('/main');
          //console.log(this.loggedInUser);
        },
        error => {
          this.errorMessage = "Your credentials are wrong, please try again."
          console.log(error);
        }
      )
    }


  }





}
