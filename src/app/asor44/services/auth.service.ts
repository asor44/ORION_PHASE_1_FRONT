import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl + '/' + environment.apiPath + '/' + environment.apiVersion;
  constructor() { }

  signUp(user: any){
    user = {
      ...user,
      "army": "",
      "reserve": false,
      "nid": "000000",
      "grade": "",
      "poste": "",
      "cotisation": false,
      "member": false,
      "right": "member"
    }
    return axios.post(`${this.baseUrl}/auth/register`, user);
  }

  // Sign In
  signIn(credentials: { email: string; password: string }){
    console.log(credentials)
    return axios.post(`${this.baseUrl}/auth/login`, credentials);
  }
}
