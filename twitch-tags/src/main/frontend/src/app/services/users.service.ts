import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {User} from "../shared/models/user.model";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private defaultPath = 'http://localhost:8080/api/users/';
  private createPath = 'http://localhost:8080/api/users/create';

  constructor(private http: HttpClient) {
  }

  getUsers(){
    return this.http.get<User[]>(this.defaultPath);
  }

  getUser(id: number) {
    const idPath = this.defaultPath + id;
    return this.http.get<User>(idPath);
  }

  saveUser(user: User){
    return this.http.post<User>(this.createPath, user);
  }

  updateUser(user: User){
    const idPath = this.defaultPath + user.id;
    return this.http.put<User[]>(idPath, user);
  }

  deleteUser(user: User){
    const idPath = this.defaultPath + user.id;
    return this.http.delete(idPath);
  }
}
