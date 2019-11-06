import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buynow2Page } from './buynow2.page';

describe('Buynow2Page', () => {
  let component: Buynow2Page;
  let fixture: ComponentFixture<Buynow2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buynow2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buynow2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
