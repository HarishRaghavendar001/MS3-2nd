import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from 'src/app/model/listing';
import { ListingServiceService } from 'src/app/service/listing-service.service';

@Component({
  selector: 'app-list-form-id',
  templateUrl: './list-form-id.component.html',
  styleUrls: ['./list-form-id.component.css']
})
export class ListFormIdComponent implements OnInit{
  stud$!:Listing
  constructor(private ar:ActivatedRoute,private service:ListingServiceService){}
  ngOnInit(): void {
    this.ar.params.subscribe((d)=>{
      const val = d['id']
      this.getById(val)
    }
    )
  }
  getById(id:Listing){
    this.service.getListById(id).subscribe((d)=>
    this.stud$=d
  )
  }

}
