import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lazyload2Component } from './lazyload2.component';
import { DebouncetimeexampleComponent } from './debouncetimeexample/debouncetimeexample.component';
import { FacebookComponent } from '../socoalmedia/facebook/facebook.component';

const routes: Routes = [
  { path: '', component: Lazyload2Component },
  { path: 'deboucetimeexample', component: DebouncetimeexampleComponent },
  { path: 'facebookexample', component: FacebookComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazyload2RoutingModule { }
