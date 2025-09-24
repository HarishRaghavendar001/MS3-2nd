import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from 'src/app/model/listing';
import { ListingServiceService } from 'src/app/service/listing-service.service';

@Component({
  selector: 'app-list-form-id',
  templateUrl: './list-form-id.component.html',
  styleUrls: ['./list-form-id.component.css']
})
export class ListFormIdComponent implements OnInit {
  // stud$!:Listing
  // idval!:any
  // constructor(private ar:ActivatedRoute,private service:ListingServiceService){}
  // ngOnInit(): void {
  //   // this.ar.params.subscribe((d)=>{
  //   //   const val = d['id']
  //   //   this.getById(val)
  //   // }
  //   // )
  //   this.idval = this.ar.snapshot.paramMap.get('id')
  //   this.getById(this.idval)
  // }
  // getById(id:Listing){
  //   this.service.getListById(id).subscribe((d)=>
  //   this.stud$=d
  // )
  // }
  cour$!:any
  // idval$!:any
  constructor(private serrvice:ListingServiceService,private ar:ActivatedRoute){}
  ngOnInit(): void {
    this.ar.params.subscribe((para)=>{
      const d=para['id']
      //  this.getById(this.idval$)
      this.getById(d)
  })
  }
getById(id:any):void{
  this.serrvice.getListByIds(id).subscribe((d)=>{
    this.cour$=d
  })
}

}
