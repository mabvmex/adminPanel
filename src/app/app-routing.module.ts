import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

//Componentes
import { Page404Component } from './page404/page404.component';


const ROUTES: Routes = [
  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: Page404Component },

]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/* 

paths: PagesRoutingModule:
      '/dashbord', '/progress', '/grafica1' 

paths: AuthRoutingModule:
      '/register', '/login'

*/