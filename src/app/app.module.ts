import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTabeComponent } from './app-tabe/app-tabe.component';
import { AppRxjsComponent } from './app-rxjs/app-rxjs.component';
import { AppStartPageComponent } from './app-start-page/app-start-page.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatTableModule,
  MatSortModule,
  MatInputModule
} from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    AppTabeComponent,
    AppRxjsComponent,
    AppStartPageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
