import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { CustomReuseStrategy } from './route-reuse-strategy';

const routes: Routes = [

  { path: '', redirectTo: '/introduction', pathMatch: 'full' },
  { path: 'introduction', component: IntroductionComponent},
  { 
    path: ':link', component: ContentDetailComponent
  },
  

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
