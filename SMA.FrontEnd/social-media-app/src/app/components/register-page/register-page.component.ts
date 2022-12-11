import { Component } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { BaseUser } from 'src/app/interfaces/base-user';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css', '../../app.component.css']
})
export class RegisterPageComponent {

  constructor(private register: RegisterService) {}

  ngOnInit() {}
  
  yeah: any;

  newUser: BaseUser = {
    userId: 0,
    username: '',
    password: ''
  };

  onSubmit(): void {
    //this.register.makeUser(this.newUser);
    const help: any = this.onCheckUser();
    this.yeah = help;
    console.log(this.yeah.username);
  }

  onCheckUser() {
    return this.register.checkUser(this.newUser.username);
  }

}
