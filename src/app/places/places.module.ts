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
import { FormsModule } from '@angular/forms';
import { JsMapComponent } from './components/maps/js-map/js-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { LocationPipe } from './pipes/location.pipe';
import { DistancePipe } from './pipes/distance.pipe';
import { RouterModule } from '@angular/router';
import { ImagePipe } from './pipes/image.pipe';
import { ImagePOIPipe } from './pipes/image-poi.pipe';
import { AboutComponent } from './pages/about/about.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SearchComponent,
    ListComponent,
    PlaceCardComponent,
    PlaceComponent,
    HomeComponent,
    NavHeaderComponent,
    SidenavListComponent,
    JsMapComponent,
    LocationPipe,
    DistancePipe,
    ImagePipe,
    ImagePOIPipe,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PlacesRoutingModule,
    MaterialModule,
    FormsModule,
    GoogleMapsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [HomeComponent],
  providers: [ HttpClientModule]
})
export class PlacesModule {}
