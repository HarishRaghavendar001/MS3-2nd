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
export class ListingListComponent implements OnInit {
  
    //  data$:Observable<Listing[]> =of([])
    //  finalData$!:Observable<Listing[]>
    list:Listing[]=[]
     searchTerm:string=''
     id$!:any
     constructor(private ar:ActivatedRoute,private r:Router,private service:ListingServiceService){}

     ngOnInit(): void {
      this.id$ = this.ar.snapshot.paramMap.get('id') || '';
    
      if (this.id$) {
        this.deleteListing(this.id$);
      }
    
      this.getList();
    }
    getList(){
      return this.service.getListing()
      .pipe(map((d)=>{
        const sort =d.sort((a:Listing,b:Listing)=>a.title.localeCompare(b.title))
        localStorage.setItem('listarray',JSON.stringify(sort))
        return sort
      }))
      .subscribe((li)=>{
        this.list=li
      }
      
      )
    }
    
    //  getList(){
    //   this.data$=this.service.getListing()
    //   this.finalData$=this.data$.pipe(
    //     map((d)=>d.sort((a:Listing,b:Listing)=>a.title.localeCompare(b.title)))
    //   )
    //   this.finalData$.pipe(toArray())
    //   let insArray;
    //   this.finalData$.subscribe((ins)=>{
    //     insArray=ins
    //     if(insArray){
    //       const Array = JSON.stringify(insArray)
    //       localStorage.setItem('listarray',Array)
    //     }
    //   })
    // }
    deleteListing(id:Listing){
      return this.service.deleteList(id).subscribe(()=>{
        alert("Deleted")
        this.r.navigate(['/getListing']);

      }

      )
    }
}
