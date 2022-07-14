import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { SearchComponent } from './pages/search/search.component';
import { ListComponent } from './pages/list/list.component';
import { PlaceCardComponent } from './components/place-card/place-card.component';
import { PlaceComponent } from './pages/place/place.component';
import { HomeComponent } from './pages/home/home.component';
import { PlacesRoutingModule } from './places-routing.module';
import { MaterialModule } from '../material/material.module';
import { NavHeaderComponent } from './components/navigation/nav-header/nav-header.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';



@NgModule({
  declarations: [
    SearchComponent,
    ListComponent,
    PlaceCardComponent,
    PlaceComponent,
    HomeComponent,
    NavHeaderComponent,
    SidenavListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PlacesRoutingModule,
    MaterialModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PlacesModule { }
