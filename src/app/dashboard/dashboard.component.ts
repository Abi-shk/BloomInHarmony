import { Component, OnInit } from '@angular/core';
import { BloomService } from '../Data Service/bloom.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})


 export class DashboardComponent implements OnInit{

  userData:any
  mypost:any=[]

  ngOnInit(): void {

    const isLoggedIn=JSON.parse(localStorage.getItem("loggedUser")|| "")

    if(isLoggedIn===""){
      this.rout.navigateByUrl("app-admin")
    }
      
      this.ds.getMyPosts().subscribe({
        next:(result:any)=>{
          this.mypost=result
        },
        error:(result:any)=>{
          alert("loading my posts error")
        }
      })
   
    
  }
     nouser: any
  

  // model for signup form
  postForm=this.fb.group({
    title:['',[Validators.required,Validators.pattern('[0-9a-zA-Z ]+')]],
    content:['',[Validators.required,Validators.pattern('[0-9a-zA-Z./?:;%_&$=, ]+')]],
    desc:['',[Validators.required,Validators.pattern('[0-9a-zA-Z./?:;%_&$=, ]+')]],
    image:['',[Validators.required,Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
    type:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+' )]]
  })
  
   constructor(private rout:Router,private fb:FormBuilder,private ds:BloomService){

    // const localData = localStorage.getItem('')
  
   }
  
 
  createPost(){

    this.userData=JSON.parse(localStorage.getItem("loggedUser")||"")
    console.log(this.userData)

    // console.log(this.signupForm.value.email,this.signupForm.value.cpsw,this.signupForm.value.name)
    this.ds.createPost(this.postForm.value.title,this.postForm.value.desc,this.postForm.value.content,this.postForm.value.image,this.postForm.value.type,this.userData.userId,this.userData.name)
    
    
    .subscribe({
      next:(result:any)=>{
        console.log(result);
      this.ngOnInit()
      this.postForm.reset()
       
  
      },
      error:(result:any)=>{
        alert("post creation Failed")
      }
    })
    
    
  }
 deletepost(postId:any){
  this.ds.deletepost(postId).subscribe({
    next:(res:any)=>{
      console.log(res)
      this.ngOnInit()
    }
  })
 }

}


