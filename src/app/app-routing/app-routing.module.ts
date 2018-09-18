import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';

import { ContentDetailComponent } from '../content-detail/content-detail.component';
import { ContentComponent } from '../content/content.component';
import { CustomReuseStrategy } from './route-reuse-strategy';

const routes: Routes = [

  { path: '', redirectTo: '/introduction', pathMatch: 'full' },
  { path: ':link', component: ContentComponent }

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
