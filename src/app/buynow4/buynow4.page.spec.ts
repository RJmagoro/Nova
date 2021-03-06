import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buynow4Page } from './buynow4.page';

describe('Buynow4Page', () => {
  let component: Buynow4Page;
  let fixture: ComponentFixture<Buynow4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buynow4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buynow4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
