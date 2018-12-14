import { Component, OnInit } from '@angular/core';
import {User} from '../../../shared/models/user.model';
import {UsersService} from '../../../services/users.service';
import {TokenStorageService} from '../../token-storage.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent implements OnInit {
  private _users: User[];
  private _username;

  constructor(private userService: UsersService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this._username = this.tokenStorage.getUsername();
    this.userService.getUsers().subscribe(
      data => {
        this._users = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user).subscribe(
      () => {
        this.ngOnInit();
      },
      error => {
        console.log(error);
      }
    )
  }


  get users(): User[] {
    return this._users;
  }


  get username() {
    return this._username;
  }
}
