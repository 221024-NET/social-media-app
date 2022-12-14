import { Component,  OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { User } from 'src/app/classes/user';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css', '../../app.component.css']
})
export class RegisterPageComponent implements OnInit{

  constructor(private register: RegisterService, private router: Router) {}

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

  onCheckUser() {
    this.register.checkUser(this.newUser).subscribe(data => this.userExists = data.valueOf());
  }

  onMakeUser() {
      this.register.makeUser(this.newUser);
      this.router.navigateByUrl('/login');
  }

}
