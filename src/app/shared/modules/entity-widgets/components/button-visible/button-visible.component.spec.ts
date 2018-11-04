import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonVisibleComponent } from './button-visible.component';

describe('ButtonVisibleComponent', () => {
  let component: ButtonVisibleComponent;
  let fixture: ComponentFixture<ButtonVisibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonVisibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonVisibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
