import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderTopComponent } from './under-top.component';

describe('UnderTopComponent', () => {
  let component: UnderTopComponent;
  let fixture: ComponentFixture<UnderTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
