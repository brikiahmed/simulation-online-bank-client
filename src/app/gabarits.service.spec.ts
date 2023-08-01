import { TestBed } from '@angular/core/testing';

import { GabaritsService } from './gabarits.service';

describe('GabaritsService', () => {
  let service: GabaritsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GabaritsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
