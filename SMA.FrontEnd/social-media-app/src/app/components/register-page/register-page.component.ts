import { Component } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { BaseUser } from 'src/app/interfaces/base-user';
import { User } from 'src/app/classes/user';
import { map } from 'rxjs';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css', '../../app.component.css']
})
export class RegisterPageComponent {

  constructor(private register: RegisterService) {}

  ngOnInit() {}

  newUser: BaseUser = {
    userId: 0,
    username: '',
    password: ''
  };
  
  isValidUser = true;

  onSubmit(): void {
    //this.register.onMakeUser(this.newUser);
    this.onCheckUser();
  }

  onCheckUser() {

    this.register.checkUser(this.newUser);
  }

  onMakeUser() {
    this.register.makeUser(this.newUser);
  }

}
