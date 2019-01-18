import { Injectable, Inject, EventEmitter } from '@angular/core';
import { IUser } from '../../interfaces/users/user.interface';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private _authUser: boolean = false;

  public showMenuEmitter = new EventEmitter<boolean>();

  constructor(private _router: Router) { }

  doLogin(_iuser: IUser){
    if ( _iuser.login === 'admin@admin.com' && _iuser.password === '123123123') {
      this._authUser = true;

      this.showMenuEmitter.emit(true);
      this._router.navigate(['/dashboard']);
    }
    else if  (_iuser.login == null && _iuser.password == null ) {
      alert('Por favor insera os dados para efetuar o login');
      this.showMenuEmitter.emit(false);
    }
    else {
      alert('Login ou senha incorretos, tente novamente');
      this.showMenuEmitter.emit(false);
    }
  }
}
