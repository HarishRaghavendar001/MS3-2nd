import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ListingServiceService } from 'src/app/service/listing-service.service';

@Component({
  selector: 'app-listing-form',
  templateUrl: './listing-form.component.html',
  styleUrls: ['./listing-form.component.css']
})
export class ListingFormComponent {

  listForm:FormGroup
  successMessage!:string
  showAlert:boolean=false
  propertyType:string[]=['Apartment','House','Commercial']
  constructor(private fb:FormBuilder,private service:ListingServiceService){
    this.listForm=this.fb.group({
    title:["",[Validators.required]],
    agent:["",[Validators.required,this.uniqueAgent]],
    description:["",[Validators.required]],
    area:["",[Validators.required,Validators.min(1),Validators.max(1000)]],
    propertyType:["",[Validators.required]],
    userRating:["",[Validators.required,Validators.min(1),Validators.max(5)]],
    inquiryCount:[0]
    })

  }
  uniqueAgent(control:AbstractControl):ValidationErrors|null{
      const realagentss= control.value
      let value = JSON.parse(localStorage.getItem('listarray') || '[]')
      if(Array.isArray(value)){
        const agents= value.map((d:any)=>d.agent)
        if(agents.includes(realagentss)){
          return {dupAgent:true}
        }
        }
        return null
      }
  get f(){
    return this.listForm.controls
  }
  onSubmit(){
    if(this.listForm.valid){
      this.service.addListing(this.listForm.value).subscribe(()=>{
        this.successMessage="List added succesfully";
        // alert(this.successMessage)
        this.showAlert=true
        setTimeout(()=>(this.successMessage=''),3000)

       
         this.listForm.reset()
      
    })
    }
  }
  closeAlert(){
    this.showAlert=false
    this.successMessage=''
  }

}
