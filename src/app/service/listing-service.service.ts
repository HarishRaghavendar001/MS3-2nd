import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing } from '../model/listing';

@Injectable({
  providedIn: 'root'
})
export class ListingServiceService {
   api:string="https://ec2-52-66-250-194.projects.wecreateproblems.com/proxy/5000/listings"
  constructor(private httpCall:HttpClient) { }
  getListing():Observable<Listing[]>{
    return this.httpCall.get<Listing[]>(this.api)
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
}
