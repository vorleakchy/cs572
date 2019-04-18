import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(public http: HttpClient) { }

  getOnlineData() {
    const USER_API = 'https://randomuser.me/api/?results=10';
    return this.http.get(USER_API);
  }

  getCachedData() {
    const usersString = localStorage.getItem('users');
    return JSON.parse(usersString);
  }

  getUserByUuid(uuid: string) {
    const users = this.getCachedData();
    const user = users.find(user => user.login.uuid === uuid);

    return user;
  }

  saveToLocalStorage(users) {
    const usersString = JSON.stringify(users);
    localStorage.setItem('users', usersString);
  }
}
