import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../auth/token-storage.service';
import {Router} from '@angular/router';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private roles: string[];
  private _authority: string;
  toggled: boolean = false;

  constructor(private tokenStorage: TokenStorageService, private router: Router, private headerService: HeaderService) { }

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
    this.headerService.updateNavBar.subscribe(
      data => this._authority = data
    )
  }

  logout(){
    this.tokenStorage.signOut();
    this._authority = null;
    //this.headerService.toggleNavBar(null);
    this.router.navigate(['/app/'])
  }

  toggleMenuBurger(){
    this.toggled = this.toggled != true;
  }


  get authority(): string {
    return this._authority;
  }
}
