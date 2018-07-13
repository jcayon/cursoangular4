import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CrearClienteComponent } from './crear-cliente.component';

describe('Test suite formulario clientes', () => {
  let component: CrearClienteComponent;
  let fixture: ComponentFixture<CrearClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ CrearClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente se crea', () => {
    expect(component).toBeTruthy();
  });

  it('Inclusión de campos nombre y ciudad', () => {
    expect(component.formCliente.contains('nombre')).toBeTruthy();
    expect(component.formCliente.contains('ciudad')).toBeTruthy();
  });

  it('Campo nombre obligatorio', () => {
    const control = component.formCliente.get('nombre');
    control.setValue('');
    expect(control.valid).toBeFalsy;
  });
});
