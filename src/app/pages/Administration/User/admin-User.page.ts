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
  editable: Boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.load();
  }

  isUndefined(obj: any) {
    return obj === undefined;
  }

  load() {
    this.userService.getMe().subscribe(p => {
      this.user = p;
    });
  }

  edit() {
    this.editable = true;
  }

  update() {
    this.userService.update(this.user).subscribe((p) => {
      this.user = p;
    });
    this.editable = false;
  }
}
