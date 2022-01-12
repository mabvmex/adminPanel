import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Grafica01Component } from './pages/grafica01/grafica01.component';
import { Page404Component } from './pages/page404/page404.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';


const ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'grafica1', component: Grafica01Component },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  
  { path: '**', component: Page404Component },

]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
