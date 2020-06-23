import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lazyload2Component } from './lazyload2.component';
import { DebouncetimeexampleComponent } from './debouncetimeexample/debouncetimeexample.component';

const routes: Routes = [
  { path: '', component: Lazyload2Component },
  { path: 'deboucetimeexample', component: DebouncetimeexampleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazyload2RoutingModule { }
