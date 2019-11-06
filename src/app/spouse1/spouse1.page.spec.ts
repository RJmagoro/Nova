import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Spouse1Page } from './spouse1.page';

describe('Spouse1Page', () => {
  let component: Spouse1Page;
  let fixture: ComponentFixture<Spouse1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Spouse1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Spouse1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
