import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buynow9Page } from './buynow9.page';

describe('Buynow9Page', () => {
  let component: Buynow9Page;
  let fixture: ComponentFixture<Buynow9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buynow9Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buynow9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
