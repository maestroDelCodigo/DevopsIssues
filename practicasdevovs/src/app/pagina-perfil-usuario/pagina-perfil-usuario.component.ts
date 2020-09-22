import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-perfil-usuario',
  templateUrl: './pagina-perfil-usuario.component.html',
  styleUrls: ['./pagina-perfil-usuario.component.scss']
})
export class PaginaPerfilUsuarioComponent implements OnInit {
  urlPhotoTest = 'https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg';
  nickNameTest = 'avatar';
  nameTest = 'soy yo';
  companiesTest = ['Repsol', 'Campsa', 'Petronor'];



  constructor() { }

  ngOnInit(): void {
  }

  newImage(newImage: string){
    this.urlPhotoTest = newImage;
  }

}
