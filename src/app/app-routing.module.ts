import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './jsmemoryleaks/hasmemoryleak/page1/page1.component';
import { Page2Component } from './jsmemoryleaks/hasmemoryleak/page2/page2.component';
import { Page1sComponent } from './jsmemoryleaks/solvedmemoryleak/page1s/page1s.component';
import { Page2sComponent } from './jsmemoryleaks/solvedmemoryleak/page2s/page2.component';
import { HomeComponent } from './home/home.component';
// import {AppComponent} from './app.component';


let routes: Routes = [];



routes = [
  { path: '', component: HomeComponent },
  { path: 'jsmemoryleak/hasmemoryleak/page1', component: Page1Component },
  { path: 'jsmemoryleak/hasmemoryleak/page2', component: Page2Component },
  { path: 'jsmemoryleak/solvedmemoryleak/page1', component: Page1sComponent },
  { path: 'jsmemoryleak/solvedmemoryleak/page2', component: Page2sComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
