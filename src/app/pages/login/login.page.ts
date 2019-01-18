import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { IUser } from '../../interfaces/users/user.interface';


@Component({
  selector: 'login-page',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.css']
})

export class LoginPage implements OnInit {
  private _user : IUser = new IUser();


  constructor( private _authService: AuthService) { }

  ngOnInit() {

  }

  public login(){
    this._authService.doLogin(this._user);
  }
}
