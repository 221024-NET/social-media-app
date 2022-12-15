import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css', '../../app.component.css']
})
export class ProfilePageComponent implements OnInit{
  profileForm: any;
  editingMode: boolean = false;
  user: User = new User(1, "CalvinUser", "password", "FirstName", "LastName", 123);

  ngOnInit(): void {
    
  }

  toggleEditingMode() {
    this.editingMode = true;
  }

  submitChanges(data: any) {
    console.log("Changes submitted");
    this.user.first_name = data.firstName;
    this.user.last_name = data.lastName;
    this.user.phone_number = data.phoneNumber
    console.warn(data);
    this.editingMode = false;
  }
}
