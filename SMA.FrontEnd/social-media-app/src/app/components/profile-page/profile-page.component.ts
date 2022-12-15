import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { FormGroup } from '@angular/forms';
import { Input } from '@angular/core';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css', '../../app.component.css']
})
export class ProfilePageComponent implements OnInit{
  profileForm: any;
  editingMode: boolean = false;
  user: User = new User(99, "username", "password", "firstname", "lastname", 100);
  
  
  
  constructor(private dataTransfer: DataTransferService, private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.user = this.dataTransfer.getData()
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
    this.profileService.updateUser(this.user.user_id, this.user).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}
