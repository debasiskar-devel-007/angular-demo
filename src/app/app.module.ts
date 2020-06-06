import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './thirdpartymodules/material-modules';
import { from } from 'rxjs';
import { HasmemoryleakComponent } from './jsmemoryleaks/hasmemoryleak/hasmemoryleak.component';
import { Page1Component } from './jsmemoryleaks/hasmemoryleak/page1/page1.component';
import { Page2Component } from './jsmemoryleaks/hasmemoryleak/page2/page2.component';

@NgModule({
  declarations: [
    AppComponent,
    HasmemoryleakComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
