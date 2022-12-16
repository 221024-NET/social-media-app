import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  user: User = new User(0, "", "", "", "", 0);

  constructor(private router: Router, private dataTransfer: DataTransferService) {}

  logout() {
    if(confirm("Are you sure you want to logout?")) {
      this.dataTransfer.setData(this.user);
      this.router.navigateByUrl("/login");
    }
  }
}
