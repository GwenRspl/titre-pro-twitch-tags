import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/user.model";
import {UsersService} from "../../services/users.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {TokenStorageService} from "../token-storage.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  editMode = false;
  submitted = false;
  user: User;
  changeEmailForm: FormGroup;
  modalActive = false;

  constructor(private usersService: UsersService, private formBuilder: FormBuilder, private router: Router, private tokenService: TokenStorageService) { }

  ngOnInit() {

    let username = this.tokenService.getUsername();
    this.usersService.getUserByUsername(username).subscribe(
      data => {
        console.log(data);
        this.user = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  get f() {
    return this.changeEmailForm.controls;
  }

  switchToEditMode() {
    if(this.editMode) {
      this.editMode = false;
    } else {
      this.editMode = true;
      this.changeEmailForm = this.formBuilder.group({
        email: ['', [Validators.required,Validators.email]]
      })
    }

  }

  changeEmail() {
    this.submitted = true;
    if(this.changeEmailForm.invalid) {
      console.log('invalid email');
      return;
    }
    this.editMode = false;
    this.user.email = this.changeEmailForm.controls.email.value;
    this.usersService.updateUser(this.user).subscribe( data => {
      console.log(data);
    })
  }

  changePassword() {
    this.router.navigate(['/chgpswrd']);
  }

  toggleModal() {
    this.modalActive = !this.modalActive;
  }

  deleteAccount(){
    this.usersService.deleteUser(this.user).subscribe(data => {
      console.log(data);
    });
    this.tokenService.signOut();
    this.router.navigate(['/index']);
  }

}
