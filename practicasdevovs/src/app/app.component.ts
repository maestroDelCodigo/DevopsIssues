import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practicasdevovs';

  urlPhotoTest = 'https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg';
  nickNameTest = 'avatar';
  nameTest = 'soy yo';
  companiesTest = ['Repsol', 'Campsa', 'Petronor'];


  newImage(newImage: string){
    this.urlPhotoTest = newImage;
  }
}
