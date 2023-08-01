import { TestBed } from '@angular/core/testing';

import { ConstraintRequestService } from './constraint-request.service';

describe('ConstraintRequestService', () => {
  let service: ConstraintRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstraintRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
