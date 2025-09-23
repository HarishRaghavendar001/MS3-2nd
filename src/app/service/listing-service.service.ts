import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Listing } from '../model/listing';

@Injectable({
  providedIn: 'root'
})
export class ListingServiceService {
   api:string="https://ec2-13-233-193-134.projects.wecreateproblems.com/proxy/5000/listings"
  constructor(private httpCall:HttpClient) { }
  getListing():Observable<Listing[]>{
    return this.httpCall.get<Listing[]>(this.api).pipe(map((d)=>{
      if(Array.isArray(d)){
     return d
      }
      else{
        return [d]
      }
    }))
  }
  addListing(list:Listing):Observable<any>{
    return this.httpCall.post(this.api,list)
  }
  getListById(id:Listing):Observable<any>{
    return this.httpCall.get(this.api+"/"+id)
  }
  deleteList(id:Listing):Observable<any>{
    return this.httpCall.delete(this.api+"/"+id)
  }
  updateList(id:Listing,list:Listing):Observable<any>{
    return this.httpCall.put(this.api+"/"+id,list);
  }
}
