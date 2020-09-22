import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPerfilUsuarioComponent } from './pagina-perfil-usuario.component';

describe('PaginaPerfilUsuarioComponent', () => {
  let component: PaginaPerfilUsuarioComponent;
  let fixture: ComponentFixture<PaginaPerfilUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaPerfilUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPerfilUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
