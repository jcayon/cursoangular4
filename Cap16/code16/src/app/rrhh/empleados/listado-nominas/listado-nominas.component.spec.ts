import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoNominasComponent } from './listado-nominas.component';

describe('ListadoNominasComponent', () => {
  let component: ListadoNominasComponent;
  let fixture: ComponentFixture<ListadoNominasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoNominasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoNominasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
