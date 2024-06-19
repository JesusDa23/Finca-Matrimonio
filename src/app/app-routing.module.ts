import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { MainDataComponent } from './pages/servicios/main-data/main-data.component';
import { FormRestauranteComponent } from './pages/servicios/form-restaurante/form-restaurante.component';
import { FormEventosComponent } from './pages/servicios/form-eventos/form-eventos.component';
import { FormCampingComponent } from './pages/servicios/form-camping/form-camping.component';
import { EntradasComponent } from './pages/servicios/form-restaurante/entradas/entradas.component';
import { PlatosComponent } from './pages/servicios/form-restaurante/platos/platos.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'servicios', component: ServiciosComponent},
  {path:'main-data', component: MainDataComponent},

  {path:'restaurante', component: FormRestauranteComponent},
  {path:'eventos', component: FormEventosComponent},
  {path:'camping', component: FormCampingComponent},

  {path: 'entradas', component: EntradasComponent},
  {path: 'platos', component: PlatosComponent},

  {path:'**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
