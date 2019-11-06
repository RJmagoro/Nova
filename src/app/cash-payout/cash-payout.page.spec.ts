import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashPayoutPage } from './cash-payout.page';

describe('CashPayoutPage', () => {
  let component: CashPayoutPage;
  let fixture: ComponentFixture<CashPayoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashPayoutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashPayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
