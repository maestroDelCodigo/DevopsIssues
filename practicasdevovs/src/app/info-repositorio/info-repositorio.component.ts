import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-repositorio',
  templateUrl: './info-repositorio.component.html',
  styleUrls: ['./info-repositorio.component.scss']
})
export class InfoRepositorioComponent implements OnInit {

  @Input() tituloRepositorio: string;
  @Input() lenguaje: string;
  @Input() descripcion: string;

  mostrar = true;

  info = '-';


  constructor() { }

  ngOnInit(): void {


  }
  toogle(): void{
    this.mostrar = !this.mostrar;

    if(this.mostrar)
    {
      this.info = '-';
    }else{
      this.info = '+';
    }
  }

}
