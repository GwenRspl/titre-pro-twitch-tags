import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../auth/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private roles: string[];
  private authority: string;
  toggled: boolean = false;

  constructor(private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {
    if(this.tokenStorage.getToken()){
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if(role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }

  logout(){
    this.tokenStorage.signOut();
    this.authority = null;
    this.router.navigate(['/'])
  }

  toggleMenuBurger(){
    console.log("toggled!");
    console.log(this.toggled);
    this.toggled = this.toggled != true;
    console.log(this.toggled);
  }

}
