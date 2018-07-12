import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivangclassComponent } from './directivangclass.component';

describe('DirectivangclassComponent', () => {
  let component: DirectivangclassComponent;
  let fixture: ComponentFixture<DirectivangclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivangclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivangclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
