import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { TiendaComponent } from './components/tienda/tienda.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent, data: {
                                            titulo: 'Venta de mobiliario medico | Mobiliarios medicos',
    // tslint:disable-next-line:max-line-length
                                            keywords: 'mesas de exploracion, mobiliario medico, mobiliarios medicos, silla medica, banco medico',
                                            description: 'Venta de mobiliarios medicos, silla medica, bancos medicos, mesas de exploracion de diferentes marcas y modelos.Envios a todo México.' }},
  { path: 'about', component: AboutComponent, data: {
                                            titulo: 'Nosotros | mobiliarios medicos',
    // tslint:disable-next-line:max-line-length
                                            keywords: 'nostros, mobiliarios medicos, mobiliario medico',
                                            description: 'Somos una empresa líder en venta de equipo médico, 25 años satisfaciendo las necesidades de nuestros clientes.mobiliarios medicos.' }},
  { path: 'servicios', component: ServiciosComponent, data: {
                                            titulo: 'Servicios de mobiliarios medicos',
    // tslint:disable-next-line:max-line-length
                                            keywords: 'servicios de mobiliarios medicos, mobiliario medico',
                                            description: 'Servicios de mobiliarios medicos,25 años satisfaciendo las necesidades de nuestros clientes.mobiliarios medicos.' }},
  { path: 'contacto', component: ContactoComponent , data: {
                                            titulo:   'Contacto de mobiliarios medicos',
    // tslint:disable-next-line:max-line-length
                                            keywords: 'contacto de mobiliarios medicos, ',
                                            description: 'Si tienes una duda o quieres realizar una cotizacion contactanos y en seguida te atenderemos contacto mobiliario medico' }},
  { path: 'tienda/:categoria', component: TiendaComponent , data: {
                                            titulo:   'Tienda de de mobiliarios medicos',
    // tslint:disable-next-line:max-line-length
                                            keywords: 'Venta de mobiliarios medicos, mobiliario medico',
                                            description: 'Venta de mobiliarios medicos de diferentes marcas y modelos. Envios a toda la Republica.' }},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });
