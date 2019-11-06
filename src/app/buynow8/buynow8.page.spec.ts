import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buynow8Page } from './buynow8.page';

describe('Buynow8Page', () => {
  let component: Buynow8Page;
  let fixture: ComponentFixture<Buynow8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buynow8Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buynow8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
