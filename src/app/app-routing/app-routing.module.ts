import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';

import { ContentComponent } from '../content/content.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component'
import { CustomReuseStrategy } from './route-reuse-strategy';

const routes: Routes = [

  { path: '', redirectTo: '/introduction', pathMatch: 'full' },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: ':link', component: ContentComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: CustomReuseStrategy
  }],
  exports: [RouterModule]
})
export class AppRoutingModule {}

/* 
  use in providers if need to reRoute same route
  provide: RouteReuseStrategy,
  useClass: CustomReuseStrategy
*/