import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';

import { SafeHtml } from './pipes/safeHtml';
import { SafeId } from './pipes/safeId';
import { SafeStyle } from './pipes/safeStyle';

import { DataService } from './shared/data.service';
import { ContentComponent } from './content/content.component';
import { ContentImageComponent } from './content-image/content-image.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ContentDetailComponent,
    ContentImageComponent,
    SafeHtml,
    SafeId,
    SafeStyle
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ DataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
