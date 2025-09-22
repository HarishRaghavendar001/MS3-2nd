import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListingFormComponent } from './components/listing-form/listing-form.component';
import { ListingListComponent } from './components/listing-list/listing-list.component';
// import { FliterPipe } from './pipe/fliter.pipe';
import { FilterPipe } from './pipe/filter.pipe';
// import { ListingFormIDComponent } from './componets/listing-form-id/listing-form-id.component';
// import { ListFormIdComponent } from './components/list-form-id/list-form-id.component'

@NgModule({
  declarations: [
    AppComponent,
    ListingFormComponent,
    ListingListComponent,
    ListingFormComponent,
    // FliterPipe
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
