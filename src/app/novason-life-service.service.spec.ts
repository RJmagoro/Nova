import { TestBed } from '@angular/core/testing';

import { NovasonLifeServiceService } from './novason-life-service.service';

describe('NovasonLifeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NovasonLifeServiceService = TestBed.get(NovasonLifeServiceService);
    expect(service).toBeTruthy();
  });
});
