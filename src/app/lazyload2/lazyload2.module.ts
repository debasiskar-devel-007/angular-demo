import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazyload2RoutingModule } from './lazyload2-routing.module';
import { Lazyload2Component } from './lazyload2.component';
import { Lazyloadc1Component } from './lazyloadc1/lazyloadc1.component';
import { DebouncetimeexampleComponent } from './debouncetimeexample/debouncetimeexample.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [Lazyload2Component, Lazyloadc1Component, DebouncetimeexampleComponent],
  imports: [
    CommonModule,
    Lazyload2RoutingModule,
    FormsModule
  ]
})
export class Lazyload2Module { }
