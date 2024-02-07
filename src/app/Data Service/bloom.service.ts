import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BloomService {

  baseUrl = "http://localhost:5000"

  constructor(private http: HttpClient) { }
  login(email: any, password: any) {
    const body = {
      email, password
    }
    return this.http.post(`${this.baseUrl}/api/login`, body)
  }

  signup(email: any, password: any, name: any) {
    const body = {
      email, password, name
    }
    return this.http.post(`${this.baseUrl}/api/signup`, body)
  }
  createPost( title:any,desc:any,content:any,image:any,type:any,userId:any,name:any) {
    const body = {
      title,desc,content,image,type,userId,name
    }
    return this.http.post(`${this.baseUrl}/api/create-post`, body)
  }
  getMyPosts() {
    let userData=JSON.parse(localStorage.getItem("loggedUser")||"")
    console.log(userData)
    return this.http.get(`${this.baseUrl}/api/myposts/${userData.userId}`)
  }
  deletepost(postId:any){
    console.log(postId)
    return this.http.delete(`${this.baseUrl}/api/deletepost/${postId}`)
  }
  getSeedPost() {
    
    return this.http.get(`${this.baseUrl}/api/seedpost`)
  }
  getPlantPost() {
    
    return this.http.get(`${this.baseUrl}/api/plantpost`)
  }
}
