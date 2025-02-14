import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  baseUrl = environment.apiUrl + '/' + environment.apiPath + '/' + environment.apiVersion;
  constructor() { }

  getAllArticles(){
    return axios.get(`${this.baseUrl}/article`);
  }

  // Create article
  createArticle(data: any){
    console.log(data)
    return axios.post(`${this.baseUrl}/articles`, data);
  }

  // Get article
  getArticle(name: string){
    return axios.get(`${this.baseUrl}/articles/${name}`);
  }
}
