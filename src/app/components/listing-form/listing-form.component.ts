import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from 'src/app/model/listing';
// import { start } from 'repl';
// import { last } from 'rxjs';
// import { title } from 'process';
import { ListingServiceService } from 'src/app/service/listing-service.service';

@Component({
  selector: 'app-listing-form',
  templateUrl: './listing-form.component.html',
  styleUrls: ['./listing-form.component.css']
})
export class ListingFormComponent {

 list:FormGroup
 courseStatus:string[]=['Draft','Published','Archieved','Retried']
 success:string=''
 errorsm:string=''
 isFollow:boolean =false
 updId!:any
 constructor(private fb:FormBuilder,private ar:ActivatedRoute,private r:Router,private service:ListingServiceService){
  this.list=this.fb.group({
    id:["",[Validators.required,this.uniqueId]],
    courseName:["",[Validators.required]],
    enrollmentCount:["",[Validators.required,Validators.min(1)]],
    status:[this.courseStatus[0]],
    publishDate:["",[Validators.required,this.dateValid]],
    category:["",[Validators.required]],
    fees:["",[Validators.required,this.positiveValue]],
    mobile:["",[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
    email:["",[Validators.required,Validators.email]],
    startD:["",[Validators.required,this.dateValid]],
    endD:["",[Validators.required,this.dateValid]],
  },{validators:this.dateRange})

  this.ar.params.subscribe((para)=>{
    this.updId=para['id']
    this.getAppointment(this.updId)
  })
 }
 dateValid(control:AbstractControl):ValidationErrors|null
{
  const dcheck =/^\d{4}-\d{2}-\d{2}$/
  if(!dcheck.test(control.value)){
    return{invalidDate:true}
  }
  return null
} 
positiveValue(control:AbstractControl):ValidationErrors|null
{
  const  num=control.value
  if(num<=0){
    return {negative:true}
  }
 return null
}
dateRange(group: FormGroup): ValidationErrors | null {
  const first = group.get('startD')?.value;
  const last = group.get('endD')?.value;
  if (first && last) {
    const startDate = new Date(first);
    const endDate = new Date(last);
    if (endDate < startDate) {
      return { range: true };
    }
  }
  return null;
}
uniqueId(control:AbstractControl):ValidationErrors|null{
  const listId = control.value;
  let value = JSON.parse(localStorage.getItem('studentarray') || '[]');
  console.log(value);
  if (Array.isArray(value)) {
    const ids = value.map((d: any) => d.id);
    // console.log(emails)
    if (ids.includes(listId)) {
      return { duplicate: true };
    }
  }
  return null;
}
get f(){
  return this.list.controls
 }

 getAppointment(id:any){
  this.service.getListByIds(id).subscribe((appointment:any)=>{
    var data = appointment[0]
    this.list.patchValue({
      id:data.id,
      courseName:data.courseName,
      enrollmentCount:data.enrollmentCount,
      status:data.status,
      publishDate:data.publishDate,
      category:data.category,
      fees:data.fees,
      mobile:data.mobile,
      email:data.email,
      starD:data.starD,
      endD:data.endD
    })

  })
 }
onChange(e:any){
  const val = e.target.value
  if(val==='Follow-up'){
    this.isFollow=true
  }
  else{
    this.isFollow=false
  }
}
 onSubmit():void{
  if(this.list.valid){
    if(this.updId){
     this.service.updateList(this.updId,this.list.value).subscribe(()=>{
      alert("updated")
      this.r.navigate(['/getListing'])
     })
    }
    else{this.service.addListing(this.list.value).subscribe({
      next:()=>{
        this.success="added"
        this.list.reset()
        setTimeout(()=>this.success='',3000)
      },
      error:()=>{
        this.errorsm="error"
        setTimeout(()=>this.errorsm='',3000)
      }
    })
  }}
 }
 
}  
// git remote add origin https://github.com/HarishRaghavendar001/Miles-3.git