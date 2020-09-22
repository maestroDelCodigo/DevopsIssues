import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-repositorios',
  templateUrl: './pagina-repositorios.component.html',
  styleUrls: ['./pagina-repositorios.component.scss']
})
export class PaginaRepositoriosComponent implements OnInit {

  titulo = 'titulo del repositorio';
  lenguaje = 'Español';
  descripcion = ' Aqui ponemos la descripcion del repositorio';

  constructor() { }

  ngOnInit(): void {
  }

}
