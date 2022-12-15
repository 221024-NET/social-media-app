import { Component,  OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { User } from 'src/app/classes/user';
import { map } from 'rxjs';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css', '../../app.component.css']
})
export class RegisterPageComponent implements OnInit{

  constructor(private register: RegisterService) {}

  ngOnInit() {}

  newUser: User = {
    user_id: 0,
    username: '',
    password: '',
    first_name: undefined,
    last_name: undefined,
    phone_number: undefined
  };
  
  userExists: boolean = true;
  passwordCheck?: string = undefined;
  passwordMatch: boolean = false;

  onSubmit(): void {
    //this.register.onMakeUser(this.newUser);
    this.onCheckUser();
  }

  onCheckUser() {
    this.register.checkUser(this.newUser).subscribe(data => this.userExists = data.valueOf());
  }

  onMakeUser() {
    //if (this.newUser.password === this.passwordCheck){
      //this.passwordMatch = true;
      this.register.makeUser(this.newUser);
      
    //}
    //else {
      //this.passwordMatch = false;
    //}

  }

}
