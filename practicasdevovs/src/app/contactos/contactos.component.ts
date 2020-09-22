import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})
export class ContactosComponent implements OnInit {
  followers = ['Perico los palotes', 'Maestro del Codigo', 'Bahamontes'];
  bios = ['Es un fanatico de portales oscuros', 'El megacrack mundial, contratadle', 'Una leyenda viva(de momento)']
  lenguajes= ['Typescript', 'Tol que te se ponga por delante', 'Javascript']
  constructor() { }

  ngOnInit(): void {
  }

}
