import { Component, OnInit } from '@angular/core';
import {User} from "../shared/models/user.model";
import {UsersService} from "../services/users.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

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

  constructor(private usersService: UsersService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.user = new User('user1', 'user@email.com', '12345678');
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

    //TODO : delete when auth done
    this.user.id = 3;

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
    //TODO : delete when auth done
    this.user.id = 3;

    this.usersService.deleteUser(this.user).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/index']);
  }

}
