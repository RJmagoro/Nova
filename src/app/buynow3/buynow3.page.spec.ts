import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buynow3Page } from './buynow3.page';

describe('Buynow3Page', () => {
  let component: Buynow3Page;
  let fixture: ComponentFixture<Buynow3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buynow3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buynow3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
