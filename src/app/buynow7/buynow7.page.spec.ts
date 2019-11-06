import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buynow7Page } from './buynow7.page';

describe('Buynow7Page', () => {
  let component: Buynow7Page;
  let fixture: ComponentFixture<Buynow7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buynow7Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buynow7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
