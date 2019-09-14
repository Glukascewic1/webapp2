import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Polaris2048Component } from './polaris2048.component';

describe('Polaris2048Component', () => {
  let component: Polaris2048Component;
  let fixture: ComponentFixture<Polaris2048Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Polaris2048Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Polaris2048Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
