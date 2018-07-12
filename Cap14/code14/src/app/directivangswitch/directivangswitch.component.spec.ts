import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivangswitchComponent } from './directivangswitch.component';

describe('DirectivangswitchComponent', () => {
  let component: DirectivangswitchComponent;
  let fixture: ComponentFixture<DirectivangswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivangswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivangswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
