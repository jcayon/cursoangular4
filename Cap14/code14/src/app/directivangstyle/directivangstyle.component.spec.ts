import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivangstyleComponent } from './directivangstyle.component';

describe('DirectivangstyleComponent', () => {
  let component: DirectivangstyleComponent;
  let fixture: ComponentFixture<DirectivangstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivangstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivangstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
