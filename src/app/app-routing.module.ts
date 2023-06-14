import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VesselEditComponent } from './vessel-edit/vessel-edit.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'vessel/edit', component: VesselEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
