import { Component, OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { map, Subscription } from 'rxjs';
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
    
    this.subscription = dt.getData()
      .subscribe(data => {
        this.user = data;
        if (this.user.user_id > 0) {
          this.isLoggedIn = true;
          console.log("logged in");
        }
        else {
          this.isLoggedIn = false;
          console.log(this.isLoggedIn);
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}