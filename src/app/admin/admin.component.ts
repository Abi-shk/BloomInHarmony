import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { BloomService } from '../Data Service/bloom.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  constructor (private rout:Router,private fb:FormBuilder,private ds:BloomService){}
  ngOnInit(): void {
    
  }

  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.pattern('[0-9a-zA-Z@.]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z@]+')]]
  })

login(){
  console.log(this.loginForm.value.email,this.loginForm.value.psw);
  
  this.ds.login(this.loginForm.value.email,this.loginForm.value.psw)
  
  
  .subscribe({
    next:(result:any)=>{
      console.log(result);
      
      this.rout.navigateByUrl("app-dashboard")



      localStorage.setItem("loggedUser",JSON.stringify(result))

      

    },
    error:(result:any)=>{
      alert("Login Failed")
    }
  })
  
  
}
}

