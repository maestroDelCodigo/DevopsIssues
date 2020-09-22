import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRepositoriosComponent } from './pagina-repositorios.component';

describe('PaginaRepositoriosComponent', () => {
  let component: PaginaRepositoriosComponent;
  let fixture: ComponentFixture<PaginaRepositoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaRepositoriosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaRepositoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
