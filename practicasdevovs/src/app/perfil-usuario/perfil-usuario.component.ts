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

  constructor() { }

  ngOnInit(): void {
  }

}
