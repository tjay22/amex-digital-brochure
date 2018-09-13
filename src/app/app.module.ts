import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { IntroductionComponent } from './introduction/introduction.component'

import { SafeHtml } from './safeHtml';

import { DataService } from './shared/data.service';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ContentDetailComponent,
    IntroductionComponent,
    SafeHtml
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
