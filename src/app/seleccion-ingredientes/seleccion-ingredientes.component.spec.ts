import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionIngredientesComponent } from './seleccion-ingredientes.component';

describe('SeleccionIngredientesComponent', () => {
  let component: SeleccionIngredientesComponent;
  let fixture: ComponentFixture<SeleccionIngredientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeleccionIngredientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeleccionIngredientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
