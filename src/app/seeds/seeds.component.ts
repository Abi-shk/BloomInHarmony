import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BloomService } from '../Data Service/bloom.service';

@Component({
  selector: 'app-seeds',
  templateUrl: './seeds.component.html',
  styleUrls: ['./seeds.component.css']
})
export class SeedsComponent implements OnInit {

  seed:any=[]

  ngOnInit(): void {
    this.ds.getSeedPost().subscribe({
      next:(result:any)=>{
        console.log(result);
        this.seed=result
      },
      error:(result:any)=>{
        alert("couldn't find seed ")
      }
    })

  }
  constructor(private rout:Router,private ds:BloomService){

    // const localData = localStorage.getItem('')
  
   }

}
