import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BloomService } from '../Data Service/bloom.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  ngOnInit(): void {}

  pswCheck:any=false

  // model for signup form
  signupForm=this.fb.group({
    email:['',[Validators.required,Validators.pattern('[0-9a-zA-Z@.]+')]],
    name:['',[Validators.required,Validators.pattern('[a-zA-Z ]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]],
    cpsw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })
  
   constructor(private rout:Router,private fb:FormBuilder,private ds:BloomService){
  
   }
  
 
  signup(){
    
    console.log(this.signupForm.value.email,this.signupForm.value.cpsw,this.signupForm.value.name)
    this.ds.signup(this.signupForm.value.email,this.signupForm.value.cpsw,this.signupForm.value.name)
    
    
    .subscribe({
      next:(result:any)=>{
        console.log(result);
        
        this.rout.navigateByUrl("app-admin")
      
      
        
  
      },
      error:(result:any)=>{
        alert("Login Failed")
      }
    })
    
    
  }
}
  
