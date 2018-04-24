import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityWrapperComponent } from './entity-wrapper.component';

describe('EntityWrapperComponent', () => {
  let component: EntityWrapperComponent;
  let fixture: ComponentFixture<EntityWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
