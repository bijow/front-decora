import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { IUser } from '../../interfaces/users/user.interface';
import { UserService } from '../../services/user.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'user-page',
  templateUrl: 'user.form.page.html',
  styleUrls: ['user.form.page.css']
})
export class UserFormPage implements OnInit{

  constructor(private _userService: UserService){}
  public email = new FormControl('', [Validators.required, Validators.email]);
  private _user: IUser = new IUser();

  public ngOnInit(){

  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();

  public addNewUser() {
    let newUser = this._user;
    this._userService.addUser(newUser);

  }
}
