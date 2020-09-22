import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,

    PerfilUsuarioComponent

    HeaderComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
