import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivangifComponent } from './directivangif.component';

describe('DirectivangifComponent', () => {
  let component: DirectivangifComponent;
  let fixture: ComponentFixture<DirectivangifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivangifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivangifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
