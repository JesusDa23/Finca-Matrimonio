import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { FormReservasComponent } from './pages/servicios/form-reservas/form-reservas.component';
import { MainDataComponent } from './pages/servicios/main-data/main-data.component';
import { FormRestauranteComponent } from './pages/servicios/form-restaurante/form-restaurante.component';
import { FormEventosComponent } from './pages/servicios/form-eventos/form-eventos.component';
import { FormCampingComponent } from './pages/servicios/form-camping/form-camping.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'servicios', component: ServiciosComponent},
  {path:'main-data', component: MainDataComponent},

  {path:'restaurante', component: FormRestauranteComponent},
  {path:'eventos', component: FormEventosComponent},
  {path:'camping', component: FormCampingComponent},

  {path:'**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
