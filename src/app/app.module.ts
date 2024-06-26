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
import { MainDataComponent } from './pages/servicios/main-data/main-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormEventosComponent } from './pages/servicios/form-eventos/form-eventos.component';
import { FormCampingComponent } from './pages/servicios/form-camping/form-camping.component';
import { FormRestauranteComponent } from './pages/servicios/form-restaurante/form-restaurante.component';
import { BebidasComponent } from './pages/servicios/form-restaurante/bebidas/bebidas.component';
import { PlatosComponent } from './pages/servicios/form-restaurante/platos/platos.component';
import { TotalPagoComponent } from './pages/servicios/form-restaurante/total-pago/total-pago.component';
import { EntradasComponent } from './pages/servicios/form-restaurante/entradas/entradas.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { MostrarPedidoComponent } from './pages/consulta/mostrar-pedido/mostrar-pedido.component';

import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { BannerComponent } from './pages/nosotros/banner/banner.component';
import { ParagraphComponent } from './pages/nosotros/paragraph/paragraph.component';
import { PhotosComponent } from './pages/nosotros/photos/photos.component';
import { ContenidoModalComponent } from './pages/servicios/form-camping/contenido-modal/contenido-modal.component';


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
    MainDataComponent,
    FormEventosComponent,
    FormCampingComponent,
    FormRestauranteComponent,
    BebidasComponent,
    PlatosComponent,
    TotalPagoComponent,
    EntradasComponent,
    NosotrosComponent,
    BannerComponent,
    ParagraphComponent,
    PhotosComponent,
    ConsultaComponent,
    MostrarPedidoComponent,
    ContenidoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
