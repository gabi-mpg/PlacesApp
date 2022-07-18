import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { ListComponent } from './pages/list/list.component';
import { PlaceComponent } from './pages/place/place.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'search',
        component: SearchComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: ':near/:name',
        component: PlaceComponent,
      },
      {
        path: '**',
        redirectTo: 'search',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesRoutingModule {}
