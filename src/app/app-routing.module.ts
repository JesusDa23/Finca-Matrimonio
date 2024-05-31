import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'product-details', component: ProductDetailsComponent},
  {path:'register', component: RegistroComponent},
  {path:'**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
