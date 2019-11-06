import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaystackPage } from './paystack.page';

describe('PaystackPage', () => {
  let component: PaystackPage;
  let fixture: ComponentFixture<PaystackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaystackPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaystackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
