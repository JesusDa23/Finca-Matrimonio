import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CarrucelComponent } from './pages/home/carrucel/carrucel.component';
import { MatrimoniosComponent } from './pages/home/matrimonios/matrimonios.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { CardServiceComponent } from './pages/servicios/card-service/card-service.component';
import { MainCafeComponent } from './pages/cafe/main-cafe/main-cafe.component';
import { EncabezadoComponent } from './pages/cafe/encabezado/encabezado.component';
import { FondoComponent } from './pages/cafe/fondo/fondo.component';
import { CarrucelCafeComponent } from './pages/cafe/carrucel-cafe/carrucel-cafe.component';
import { CafeComponent } from './pages/cafe/cafe.component';
import { CafeDetalleComponent } from './pages/cafe/cafe-detalle/cafe-detalle.component';
import { PresentacionComponent } from './pages/cafe/presentacion/presentacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarrucelComponent,
    MatrimoniosComponent,
    ServiciosComponent,
    CardServiceComponent,
    MainCafeComponent,
    EncabezadoComponent,
    FondoComponent,
    CarrucelCafeComponent,
    CafeComponent,
    CafeDetalleComponent,
    PresentacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
