import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from '@angular/platform-browser';
import {LoginInfo} from "../login-info";
import {AuthService} from "../auth.service";
import {TokenStorageService} from "../token-storage.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[];
  private loginInfo: LoginInfo;
  errorMessage = '';
  isAdmin = false;

  constructor(private route: Router, private formBuilder: FormBuilder, private authService:AuthService, private tokenStorage: TokenStorageService, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('TwitchTags - Log in');
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    if(this.tokenStorage.getToken()){
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
      this.isAdmin = this.tokenStorage.isAdmin();
    }
  }

  get f() {
    return this.loginForm.controls;
  }

  goToSignup() {
    this.route.navigate(['/app/signup']);
  }

  goToForgottenPassword() {
    this.route.navigate(['/app/fpswrd']);
  }

  goToAccount() {
    this.route.navigate(['/app/account']);
  }

  goToHomepage() {
    this.route.navigate(['/app']);
  }

  goToAdmin() {
    this.route.navigate(['/app/admin']);
  }

  login() {
    this.submitted = true;
    if(this.loginForm.invalid) {
      console.log('invalid form');
      return;
    }
    this.loginInfo = new LoginInfo(this.loginForm.value.username, this.loginForm.value.password);
    this.authService.attemptAuthentication(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.isAdmin = this.tokenStorage.isAdmin();
        window.location.reload();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );

  }

}
