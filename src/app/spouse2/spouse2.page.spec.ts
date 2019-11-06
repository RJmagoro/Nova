import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Spouse2Page } from './spouse2.page';

describe('Spouse2Page', () => {
  let component: Spouse2Page;
  let fixture: ComponentFixture<Spouse2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Spouse2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Spouse2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
