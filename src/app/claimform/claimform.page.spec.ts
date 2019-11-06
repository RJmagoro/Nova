import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimformPage } from './claimform.page';

describe('ClaimformPage', () => {
  let component: ClaimformPage;
  let fixture: ComponentFixture<ClaimformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimformPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
