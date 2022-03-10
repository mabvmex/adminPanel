import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FormsModule } from "@angular/forms";

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica01Component } from './grafica01/grafica01.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica01Component,
    PagesComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica01Component,
    PagesComponent
  ]
})
export class PagesModule { }
