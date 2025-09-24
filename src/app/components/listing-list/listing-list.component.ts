import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, of, toArray } from 'rxjs';
import { Listing } from 'src/app/model/listing';
import { ListingServiceService } from 'src/app/service/listing-service.service';

@Component({
  selector: 'app-listing-list',
  templateUrl: './listing-list.component.html',
  styleUrls: ['./listing-list.component.css']
})
export class ListingListComponent implements OnInit{
  
  
    courses$:Observable<any[]>=of([])
    filtered$:Observable<any[]>=of([])
    idVal$:any
    constructor(private service:ListingServiceService,private ar:ActivatedRoute,private r:Router){}
  ngOnInit(): void {
    // this.idVal$=this.ar.snapshot.paramMap.get('id')
    this.ar.params.subscribe((idget)=>{
      this.idVal$= idget['id']
      this.delete(this.idVal$)
    })
   
    this.getData()
  }
  getData():void{
    this.courses$=this.service.getListing()
    this.filtered$=this.courses$.pipe(
      map((d)=>d.sort((a:any,b:any)=>a.courseName.localeCompare(b.courseName)))
    )
    this.filtered$.pipe(toArray())
    let insArray;
    this.filtered$.subscribe((ins)=>{
      insArray=ins
      if(insArray){
        const Array = JSON.stringify(insArray)
        localStorage.setItem('studentarray',Array)
      }
    })
  }
  searchValue(e: any) {
    const data=e.target.value
    if(!data){
      this.filtered$=this.courses$
      return
    }
    else{
      this.filtered$=this.courses$.pipe(
        map((dat)=>
          dat.filter((v)=>
          v.courseName.toLowerCase().includes(data.toLowerCase())
      )
        )
      )
  }}
  
  delete(id:any):void{
    this.service.deleteList(id).subscribe(()=>{
      alert('deleted')
      this.r.navigate(['/getListing'])
    })
  }

}
