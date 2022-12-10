import { Component } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css', '../../app.component.css']
})
export class RegisterPageComponent {

  constructor(private register: RegisterService) {}

  ngOnInit() {}
  

  newUser: User = {
    userId: 0,
    username: '',
    password: ''
  };

  onSubmit(): void {
    //this.register.makeUser(this.newUser);
  }

  onCheckUser() {
    return this.register.checkUser(this.newUser.username);
  }

}
