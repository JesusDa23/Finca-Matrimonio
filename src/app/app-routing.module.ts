import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { MainCafeComponent } from './pages/cafe/main-cafe/main-cafe.component';
import { CafeM250Component } from './pages/cafe/cafe-m-250/cafe-m-250.component';
import { CafeM500Component } from './pages/cafe/cafe-m-500/cafe-m-500.component';
import { CafeT500Component } from './pages/cafe/cafe-t-500/cafe-t-500.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'servicios', component: ServiciosComponent},
  {path:'cafe', component: MainCafeComponent},
  {path:'cafe250', component: CafeM250Component},
  {path:'cafe500', component: CafeM500Component},
  {path:'cafe501', component: CafeT500Component},

  {path:'**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
