import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesionViewerComponent } from './quesion-viewer.component';

describe('QuesionViewerComponent', () => {
  let component: QuesionViewerComponent;
  let fixture: ComponentFixture<QuesionViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuesionViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuesionViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
