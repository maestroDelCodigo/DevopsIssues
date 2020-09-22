import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { HomeComponent } from './home/home.component';
import { PaginaPerfilUsuarioComponent } from './pagina-perfil-usuario/pagina-perfil-usuario.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'perfil', component: PaginaPerfilUsuarioComponent,
  },
  {
    path: 'contactos', component: ContactosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
