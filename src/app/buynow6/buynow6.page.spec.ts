import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buynow6Page } from './buynow6.page';

describe('Buynow6Page', () => {
  let component: Buynow6Page;
  let fixture: ComponentFixture<Buynow6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buynow6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buynow6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
