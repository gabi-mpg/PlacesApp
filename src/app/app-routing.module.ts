import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './places/pages/home/home.component';

const routes: Routes = [
  {
    path: 'places',
    component: HomeComponent
  },
  {
    path: 'places',
    loadChildren: () => import('./places/places.module').then ( m => m.PlacesModule)
  },
  {
    path: '**',
    redirectTo: 'places'
  }
];

@NgModule({
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
