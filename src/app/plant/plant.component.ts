import { Component, OnInit } from '@angular/core';
import { BloomService } from '../Data Service/bloom.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {
plant:any=[]

  ngOnInit(): void {
    this.ds.getPlantPost().subscribe({
      next:(result:any)=>{
        console.log(result);
        this.plant=result

      },
      error:(result:any)=>{
        alert("couldn't find seed ")
      }
    })

  }
  constructor(private rout:Router,private ds:BloomService){

    // const localData = localStorage.getItem('')
  
   }
   showpost(single:any){
        
   }

}
