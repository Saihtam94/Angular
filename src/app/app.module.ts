import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapsComponent } from './maps/maps.component';
import { UnComponent } from './un/un.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    ChaptersComponent,
    MapsComponent,
    UnComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyD-qynSX_mZ-xrTxj7vut33VD9NImfHxmw'
    })
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
