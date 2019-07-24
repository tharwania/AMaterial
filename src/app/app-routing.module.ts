import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  exports: [
    RouterModule,
    MaterialModule
  ]
})
export class AppRoutingModule { }
