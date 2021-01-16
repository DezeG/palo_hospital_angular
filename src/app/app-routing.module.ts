import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindHospitalComponent } from './find-hospital/find-hospital.component';

const routes: Routes = [
  {
    path: '', component: FindHospitalComponent
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
