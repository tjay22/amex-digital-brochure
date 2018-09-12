import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';

const routes: Routes = [

  { path: '', redirectTo: '/introduction', pathMatch: 'full' },
  { path: 'introduction', component: ContentComponent },
  {  path: ':sublink', component: ContentDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
