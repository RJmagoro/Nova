import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buynow5Page } from './buynow5.page';

describe('Buynow5Page', () => {
  let component: Buynow5Page;
  let fixture: ComponentFixture<Buynow5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buynow5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buynow5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
