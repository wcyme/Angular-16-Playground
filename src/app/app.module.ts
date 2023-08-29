import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { VesselEditComponent } from './vessel-edit/vessel-edit.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { VesselListComponent } from './vessel-list/vessel-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VesselEditComponent,
    VesselListComponent,
    GeocodeSearchComponent,
    GeocodeItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
