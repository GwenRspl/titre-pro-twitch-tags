import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../shared/models/user.model";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  usedUsernames = ['user','user1'];

  constructor(private route: Router, private formBuilder: FormBuilder, private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(data => {
      for(let user of data) {
        this.usedUsernames.push(user.username);
      }
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
    this.route.navigate(['/signin']);
  }

  registerUser() {
    this.submitted = true;
    if(this.registerForm.invalid) {
      console.log('invalid form');
      return;
    }
    let user : User = new User(this.registerForm.value.username, this.registerForm.value.email, this.registerForm.value.password);
    this.usersService.saveUser(user).subscribe(data => {
      console.log(data);
      console.log("done");
    })

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
