import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Listing } from '../model/listing';

@Injectable({
  providedIn: 'root'
})
export class ListingServiceService {
   api:string="https://ec2-13-233-104-225.projects.wecreateproblems.com/proxy/5000/listings"
  constructor(private httpCall:HttpClient) { }
  getListing():Observable<any>{
    return this.httpCall.get(this.api)
  }
  addListing(list:Listing):Observable<any>{
    return this.httpCall.post(this.api,list)
  }
  getListById(id:Listing):Observable<any>{
    return this.httpCall.get(this.api+"/"+id)
  }
  getListByIds(id:Listing):Observable<any[]>{
    return this.httpCall.get<[]>(this.api+"/"+id).pipe(map((d)=>{
      if(Array.isArray(d)){
        return d
      }
      else{
        return [d]
      }
    }))
  }
  deleteList(id:Listing):Observable<any>{
    return this.httpCall.delete(this.api+"/"+id)
  }
  updateList(id:Listing,list:Listing):Observable<any>{
    return this.httpCall.put(this.api+"/"+id,list);
  }
}
