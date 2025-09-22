import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ListingFormComponent } from './components/listing-form/listing-form.component';
import { ListingListComponent } from './components/listing-list/listing-list.component';
import { ListingFormComponent } from './components/listing-form/listing-form.component';
import { ListFormIdComponent } from './components/list-form-id/list-form-id.component';
// import { ListFormIdComponent } from './components/list-form-id/list-form-id.component';

const routes: Routes = [
  {path:'',redirectTo:'addListing',pathMatch:'full'},
  {path:'addListing',component:ListingFormComponent},
  {path:'getListing',component:ListingListComponent},
  {path:'getListing/getListById/:id',component:ListFormIdComponent},
  {path:' deleteList/:id',component:ListingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
