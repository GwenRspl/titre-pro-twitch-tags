import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    },
      {
        validator: this.passwordsNotMatching
      })
  }

  get f() {
    return this.changePasswordForm.controls;
  }

  passwordsNotMatching(abstractControl: AbstractControl) {
    let password = abstractControl.get('newPassword').value;
    let cpassword = abstractControl.get('confirmPassword').value;
    if(password != cpassword) {
      abstractControl.get('confirmPassword').setErrors({'passwordsNotMatching' : true})
    } else {
      return null;
    }
  }

  onSubmit() {
    this.submitted = true;
    if(this.changePasswordForm.invalid) {
      console.log('invalid form');
      return;
    }
    console.log(this.changePasswordForm);
  }

}
