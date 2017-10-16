import { User } from '../../../../Model/User';
import { UserService } from '../../../services/modelService/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'page-adminUser',
  templateUrl: './admin-User.page.html'
})
// tslint:disable-next-line:component-class-suffix
export class AdminUserPage implements OnInit {

  user: User;
  load: Boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getMe().subscribe(p => {
      this.user = p;
      this.load = true;
    });
  }
}
