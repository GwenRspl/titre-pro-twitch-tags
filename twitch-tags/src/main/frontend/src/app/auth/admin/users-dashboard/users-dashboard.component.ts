import { Component, OnInit } from '@angular/core';
import {User} from "../../../shared/models/user.model";
import {UsersService} from "../../../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent implements OnInit {
  private _users: User[];

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {
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
      data => {
        console.log(data);
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
}
