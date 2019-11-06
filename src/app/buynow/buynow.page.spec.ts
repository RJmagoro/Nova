import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuynowPage } from './buynow.page';

describe('BuynowPage', () => {
  let component: BuynowPage;
  let fixture: ComponentFixture<BuynowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuynowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuynowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
