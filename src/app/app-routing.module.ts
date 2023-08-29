import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VesselEditComponent } from './vessel-edit/vessel-edit.component';
import { VesselListComponent } from './vessel-list/vessel-list.component';
import { GoogleMapComponent } from './google-map/google-map.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'vessel/edit', component: VesselEditComponent },
  { path: 'vessel/list', component: VesselListComponent },
  { path: 'map', component: GoogleMapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
