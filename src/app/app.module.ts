import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//Rutas
import { app_routing } from "./app.routes";

//servicios
import { InformacionService } from "./services/informacion.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { LineaHogarComponent } from './components/linea-hogar/linea-hogar.component';
import { LineaIndustrialComponent } from './components/linea-industrial/linea-industrial.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HogarComponent } from './components/hogar/hogar.component';
import { ClasesComponent } from './components/clases/clases.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NosotrosComponent,
    LineaHogarComponent,
    LineaIndustrialComponent,
    ContactoComponent,
    HogarComponent,
    ClasesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    app_routing
  ],
  providers: [
    InformacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
