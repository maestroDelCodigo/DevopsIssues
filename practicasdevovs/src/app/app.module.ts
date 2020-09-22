import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginaPerfilUsuarioComponent } from './pagina-perfil-usuario/pagina-perfil-usuario.component';
import { InfoRepositorioComponent } from './info-repositorio/info-repositorio.component';
import { PaginaRepositoriosComponent } from './pagina-repositorios/pagina-repositorios.component';


@NgModule({
  declarations: [
    AppComponent,
    PerfilUsuarioComponent,
    HeaderComponent,
    HomeComponent,
    PaginaPerfilUsuarioComponent,
    InfoRepositorioComponent,
    PaginaRepositoriosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
