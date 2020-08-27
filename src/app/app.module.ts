import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './cmd/dashboard/dashboard.component';
import { ViewDetailsComponent } from './cmd/view-details/view-details.component';
import { HeaderComponent } from './cmd/header/header.component';
import { EditComponent } from './cmd/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ViewDetailsComponent,
    HeaderComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
