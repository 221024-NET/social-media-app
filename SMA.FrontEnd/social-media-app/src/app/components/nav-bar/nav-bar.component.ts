import { Component, OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/classes/user';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnDestroy {

  isLoggedIn: boolean = false;
  user: User = new User(0, '', '');
  subscription: Subscription;

  constructor(private dt: DataTransferService) {
    this.subscription = dt.getData().subscribe(data => this.user = data);


    console.log("navbar called getData");
    if (this.user.user_id > 0) {
      this.isLoggedIn = true;
    }
    else {
      this.isLoggedIn = false;
    }

  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

/*
user: User;
  dataTransfer: DataTransferService;
  dummyUser: User =
    {
      user_id: 37,
      username: "Gummy",
      password: "Shipz4Lyfe",
      first_name: "Gummy",
      last_name: "Ship",
      phone_number: 5551235467
    }

  constructor(dt: DataTransferService) {
    this.dataTransfer = dt;
    //this.user = this.dataTransfer.getData();
    if (this.user.user_id > 0) {
      this.isLoggedIn = true;
    }
    else {
      this.isLoggedIn = false;
    }
  }

  ngOnInit() {
    console.log("OnInit Called")
    //this.user = this.dataTransfer.getData();
    if (this.user.user_id > 0) {
      this.isLoggedIn = true;
    }
    else {
      this.isLoggedIn = false;
    }
  }
  */