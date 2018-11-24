import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {SignupInfo} from "../signup-info";
import {AuthService} from "../auth.service";
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  usedUsernames = ['user','user1'];
  signupInfo: SignupInfo;
  isSignedUp = false;
  isSignupFailed = false;
  errorMessage = '';

  constructor(private route: Router, private formBuilder: FormBuilder, private usersService: UsersService, private authService: AuthService, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('TwitchTags - Register');
    this.usersService.getUsernameList().subscribe(data => {
      this.usedUsernames = data;
    });
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, this.forbiddenUsernames.bind(this)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.passwordsNotMatching
    })
  }

  get f() {
    return this.registerForm.controls;
  }

  goToLogin() {
    this.route.navigate(['/app/signin']);
  }

  registerUser() {
    this.submitted = true;
    if(this.registerForm.invalid) {
      console.log('invalid form');
      return;
    }

    this.signupInfo = new SignupInfo(this.registerForm.value.username, this.registerForm.value.email, this.registerForm.value.password);
    this.authService.signup(this.signupInfo).subscribe(
      () => {
        this.isSignedUp = true;
        this.isSignupFailed = false;
      },
      error => {
        this.errorMessage = error.error.message;
        this.isSignupFailed = true;
      }
    );
  }

  forbiddenUsernames(control: FormControl): {[s: string]: boolean} {
    if (this.usedUsernames.indexOf(control.value) !== -1) {
      return {'forbiddenUsername': true};
    }
    return null;
  }

  passwordsNotMatching(abstractControl: AbstractControl) {
    let password = abstractControl.get('password').value;
    let cpassword = abstractControl.get('confirmPassword').value;
    if(password != cpassword) {
      abstractControl.get('confirmPassword').setErrors({'passwordsNotMatching' : true})
    } else {
      return null;
    }
  }

}
