import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazyload2RoutingModule } from './lazyload2-routing.module';
import { Lazyload2Component } from './lazyload2.component';
import { Lazyloadc1Component } from './lazyloadc1/lazyloadc1.component';


@NgModule({
  declarations: [Lazyload2Component, Lazyloadc1Component],
  imports: [
    CommonModule,
    Lazyload2RoutingModule
  ]
})
export class Lazyload2Module { }
