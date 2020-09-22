import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent implements OnInit {

  @Input() urlPhoto: string;
  @Input() nickName: string;
  @Input() name: string;
  @Input() companies: string[];
  @Output() newImage = new EventEmitter<string>();


  constructor() {

   }

  ngOnInit(): void {


  }

  onSelectFile(event: any): void { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => { // called once readAsDataURL is completed
        // this.urlPhoto = event.target.result as string;
        this.newImage.emit(event.target.result as string);
      }
    }
  }

}
