import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingServiceService } from 'src/app/service/listing-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent  {

//   listForm!:FormGroup
//   successMessage!:string
//   showAlert:boolean=false
//   id:any
//   edit:boolean=false
//   propertyType:string[]=['Apartment','House','Commercial']
//   constructor(private fb:FormBuilder,private service:ListingServiceService,private ar:ActivatedRoute,private r:Router){
   

//   }
//   ngOnInit(): void {
//     this.listForm=this.fb.group({
//       title:["",[Validators.required]],
//       agent:["",[Validators.required,this.uniqueAgent]],
//       description:["",[Validators.required]],
//       area:["",[Validators.required,Validators.min(1),Validators.max(1000)]],
//       propertyType:["",[Validators.required]],
//       userRating:["",[Validators.required,Validators.min(1),Validators.max(5)]],
//       mobile:["",[Validators.required,Validators.pattern('^(\\+)?([0-9]{10,15})$')]],
//       email: ["", [
//         Validators.required,
//         Validators.pattern('^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')
//       ]],
      
//       inquiryCount:[0]
//       })
//    this.id = this.ar.snapshot.paramMap.get('id');
  
//    if(this.id){
//     this.service.getListById(this.id).subscribe((d)=>{
//      this.listForm.patchValue(d)
//     })
//    }
//   }
//   uniqueAgent(control:AbstractControl):ValidationErrors|null{
//       const realagentss= control.value
//       let value = JSON.parse(localStorage.getItem('listarray') || '[]')
//       if(Array.isArray(value)){
//         const agents= value.map((d:any)=>d.agent)
//         if(agents.includes(realagentss)){
//           return {dupAgent:true}
//         }
//         }
//         return null
//       }
//   get f(){
//     return this.listForm.controls
//   }
//   onSubmit(): void {
//   if(this.listForm.valid){

//       console.log(this.id)
//       this.service.updateList(this.id, this.listForm.value).subscribe(()=>{
//         // console.log(this.id)
//       //  alert('updated')
//       this.successMessage="Updated Successfully"
//        this.r.navigate(['/getListing'])
//       });
    
// }}
//   closeAlert(): void {
//     this.showAlert = false;
//     this.successMessage = '';
//   }
}  