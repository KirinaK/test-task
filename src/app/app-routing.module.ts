import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppTabeComponent } from './app-tabe/app-tabe.component';
import { AppRxjsComponent } from './app-rxjs/app-rxjs.component';
import { AppStartPageComponent } from './app-start-page/app-start-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/tabe', pathMatch: 'full' },
  { path: 'tabe', component: AppTabeComponent },
  { path: 'start-page', component: AppStartPageComponent },
  { path: 'rxjs', component: AppRxjsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
