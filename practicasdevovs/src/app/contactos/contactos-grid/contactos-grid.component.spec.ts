import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactosGridComponent } from './contactos-grid.component';

describe('ContactosGridComponent', () => {
  let component: ContactosGridComponent;
  let fixture: ComponentFixture<ContactosGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactosGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactosGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
