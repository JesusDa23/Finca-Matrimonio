import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { MainCafeComponent } from './pages/cafe/main-cafe/main-cafe.component';
import { CafeDetalleComponent } from './pages/cafe/cafe-detalle/cafe-detalle.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'servicios', component: ServiciosComponent},
  {path:'cafe', component: MainCafeComponent},
  {path:'cafe/detalle/:id', component: CafeDetalleComponent},
  {path:'**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
