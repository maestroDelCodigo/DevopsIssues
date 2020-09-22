import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactos-grid',
  templateUrl: './contactos-grid.component.html',
  styleUrls: ['./contactos-grid.component.scss']
})
export class ContactosGridComponent implements OnInit {
@Input() followers: string[]; 
@Input() bios: string[];
@Input() lenguaje: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
