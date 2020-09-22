import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginaPerfilUsuarioComponent } from './pagina-perfil-usuario/pagina-perfil-usuario.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ContactosGridComponent } from './contactos/contactos-grid/contactos-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    PerfilUsuarioComponent,
    HeaderComponent,
    HomeComponent,
    PaginaPerfilUsuarioComponent,
    ContactosComponent,
    ContactosGridComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
