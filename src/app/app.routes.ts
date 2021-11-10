import { RouterModule, Routes } from '@angular/router';

import {
  ContactoComponent,
  HomeComponent,
  LineaHogarComponent,
  HogarComponent,
  LineaIndustrialComponent,
  NosotrosComponent,
  ClasesComponent
} from "./components/index.paginas";

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'linea-hogar', component: LineaHogarComponent,
    children:[
    { path: 'hogar', component: HogarComponent }
  ]},
  { path: 'linea-industrial', component: LineaIndustrialComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'clases', component: ClasesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
