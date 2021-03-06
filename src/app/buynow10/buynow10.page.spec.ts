import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buynow10Page } from './buynow10.page';

describe('Buynow10Page', () => {
  let component: Buynow10Page;
  let fixture: ComponentFixture<Buynow10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buynow10Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buynow10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
