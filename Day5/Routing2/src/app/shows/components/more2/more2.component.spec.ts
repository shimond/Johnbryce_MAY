import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { More2Component } from './more2.component';

describe('More2Component', () => {
  let component: More2Component;
  let fixture: ComponentFixture<More2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ More2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(More2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
