import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { FormControl, FormGroup } from '@angular/forms';
import { Input } from '@angular/core';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { ProfileService } from 'src/app/services/profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css', '../../app.component.css']
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  formdata: any;
  editingMode: boolean = false;
  user: User = new User(0, '', '');
  subscription: Subscription;

  constructor(private dataTransfer: DataTransferService, private profileService: ProfileService) {
    this.subscription = this.dataTransfer.getData().subscribe(data => {
      this.user = data
      console.log('profile user updated to', this.user);
    });
  }

  ngOnInit(): void {
    this.user = this.dataTransfer.findUser();
    this.formdata = new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      phoneNumber: new FormControl("")
    });
  }

  toggleEditingMode() {
    this.editingMode = true;
  }

  submitChanges(data: any) {
    if (!this.formdata.valid) {
      this.formdata.markAllAsTouched();
    }
    else {
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
