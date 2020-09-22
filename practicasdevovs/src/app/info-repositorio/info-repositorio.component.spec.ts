import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRepositorioComponent } from './info-repositorio.component';

describe('InfoRepositorioComponent', () => {
  let component: InfoRepositorioComponent;
  let fixture: ComponentFixture<InfoRepositorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoRepositorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRepositorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
