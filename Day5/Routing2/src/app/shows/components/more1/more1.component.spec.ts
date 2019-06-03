import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { More1Component } from './more1.component';

describe('More1Component', () => {
  let component: More1Component;
  let fixture: ComponentFixture<More1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ More1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(More1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
