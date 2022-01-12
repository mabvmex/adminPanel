import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Components
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const authRoutes: Routes = [

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
