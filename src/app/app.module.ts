import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataService } from './shared/data.service';
import { ContentComponent } from './content/content.component';
import { ContentDetailComponent } from './content-detail/content-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ContentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
