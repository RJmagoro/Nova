import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateringPage } from './catering.page';

describe('CateringPage', () => {
  let component: CateringPage;
  let fixture: ComponentFixture<CateringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateringPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
