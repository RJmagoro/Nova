import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Spouse3Page } from './spouse3.page';

describe('Spouse3Page', () => {
  let component: Spouse3Page;
  let fixture: ComponentFixture<Spouse3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Spouse3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Spouse3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
