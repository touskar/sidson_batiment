import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BatimentLayoutComponent} from "./batiment-layout/batiment-layout.component";


const routes: Routes = [
  { path: '', component: BatimentLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
