import { TestBed } from '@angular/core/testing';

import { NovasonLifeService } from './novason-life.service';

describe('NovasonLifeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NovasonLifeService = TestBed.get(NovasonLifeService);
    expect(service).toBeTruthy();
  });
});
