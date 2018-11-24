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
  private _authority: string;
  toggled: boolean = false;

  constructor(private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {
    if(this.tokenStorage.getToken()){
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if(role === 'ROLE_ADMIN') {
          this._authority = 'admin';
          return false;
        }
        this._authority = 'user';
        return true;
      });
    }
  }

  logout(){
    this.tokenStorage.signOut();
    this._authority = null;
    this.router.navigate(['/app/'])
  }

  toggleMenuBurger(){
    this.toggled = this.toggled != true;
  }


  get authority(): string {
    return this._authority;
  }
}
