import { TestBed } from '@angular/core/testing';

import { PassationService } from './passation.service';

describe('PassationService', () => {
  let service: PassationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
