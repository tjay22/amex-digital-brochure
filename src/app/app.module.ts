import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { ContentImageComponent } from './content-image/content-image.component';
import { ContentHeadlineComponent } from './content-headline/content-headline.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OpeningSceneComponent } from './opening-scene/opening-scene.component';

import { SafeHtml } from './pipes/safeHtml';
import { SafeId } from './pipes/safeId';
import { SafeStyle } from './pipes/safeStyle';
import { SplitText } from './pipes/splitText';

import { DataService } from './shared/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ContentDetailComponent,
    ContentImageComponent,
    ContentHeadlineComponent,
    SafeHtml,
    SafeId,
    SafeStyle,
    SplitText,
    PageNotFoundComponent,
    OpeningSceneComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ DataService, {provide: APP_BASE_HREF, useValue: '/AMEX/2018/34213_digital_guides/platinum_charge_v2/'} ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
