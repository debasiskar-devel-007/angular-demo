import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoMaterialModule } from './thirdpartymodules/material-modules';
import { from } from 'rxjs';
import { HasmemoryleakComponent } from './jsmemoryleaks/hasmemoryleak/hasmemoryleak.component';
import { Page1Component } from './jsmemoryleaks/hasmemoryleak/page1/page1.component';
import { Page2Component } from './jsmemoryleaks/hasmemoryleak/page2/page2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    DemoMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
