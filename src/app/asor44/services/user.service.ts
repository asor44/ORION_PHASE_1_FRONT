import { Injectable } from '@angular/core';
import axios from "axios";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  baseUrl = environment.apiUrl + '/' + environment.apiPath + '/' + environment.apiVersion;

  getUserById(id: string) {
    const token = localStorage.getItem('token');

    if (!token) {
      return Promise.reject('Token not found');
    }

    return axios.get(`${this.baseUrl}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  me(){
    return axios.get(`${this.baseUrl}/users/user`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }


  getAllUsers() {
    const token = localStorage.getItem('token');

    if (!token) {
      return Promise.reject('Token not found');
    }

    return axios.get(`${this.baseUrl}/users`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  updateProfile(updatedData: any, id: string) {
    console.log(updatedData);
    return axios.put(`${this.baseUrl}/users/${id}`, updatedData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
}
