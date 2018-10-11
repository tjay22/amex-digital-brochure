import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';

import { ContentComponent } from '../content/content.component';
import { ContentDetailComponent } from '../content-detail/content-detail.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component'
import { OpeningSceneComponent } from '../opening-scene/opening-scene.component';
import { CustomReuseStrategy } from './route-reuse-strategy';

const routes: Routes = [

  // { path: '', redirectTo: '/introduction', pathMatch: 'full' },
  // { path: 'page-not-found', component: PageNotFoundComponent },
  // { path: ':link', component: ContentComponent },

  { path: '', redirectTo: '/introduction', pathMatch: 'full' },
  { path: 'introduction', component: ContentComponent },
  { path: 'travel-voucher', component: ContentComponent },
  { path: 'boingo', component: ContentComponent },
  { path: 'lounge-access', component: ContentComponent },
  { path: 'international-airline-programme', component: ContentComponent },
  { path: 'partner-programmes', component: ContentComponent },
  { path: 'cruise-privileges-programme', component: ContentComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}

/* 
  use in providers if need to reRoute same route
  provide: RouteReuseStrategy,
  useClass: CustomReuseStrategy
*/