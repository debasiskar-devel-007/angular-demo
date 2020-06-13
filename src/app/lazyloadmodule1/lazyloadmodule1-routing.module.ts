import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lazyloadmodule1Component } from './lazyloadmodule1.component';
import { Lazyloadc1Component } from '../lazyloadc1/lazyloadc1.component';
import { Lazyloadc2Component } from './lazyloadc2/lazyloadc2.component';
import { Lazyloadc3Component } from './lazyloadc3/lazyloadc3.component';

const routes: Routes = [
  { path: '', component: Lazyloadmodule1Component },
  { path: 'lazyloadmodule1/c1', component: Lazyloadc1Component },
  { path: 'lazyloadmodule1/c2', component: Lazyloadc2Component },
  { path: 'lazyloadmodule1/c3', component: Lazyloadc3Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazyloadmodule1RoutingModule { }
