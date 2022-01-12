import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica01Component } from './grafica01/grafica01.component';


const pagesRoutes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'grafica1', component: Grafica01Component },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes )],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
