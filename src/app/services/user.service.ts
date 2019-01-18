import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/users/user.interface';

@Injectable()
export class UserService {

  public users: IUser[];

  constructor() { }

  public getUsers() {
    if(localStorage.getItem('users') === null ){
      this.users = [];
    } else {
      this.users = JSON.parse(localStorage.getItem('users'));
    }
    return this.users;
  }

  public addUser(user: IUser) {
    this.users.push(user);
    let users = [];
    if(localStorage.getItem('users') === null ){
      users = [];
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
     }else {
      users = JSON.parse(localStorage.getItem('users'));
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
     }
  }

  public deleteUser(user: IUser) {
    for (let i = 0; i <= this.users.length; i++){
      if (user == this.users[i]){
        this.users.splice(i, 1);
        localStorage.setItem('users', JSON.stringify(this.users));
      }
    }
  }
}
