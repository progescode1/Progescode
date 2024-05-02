import { TestBed } from '@angular/core/testing';

import { DebourService } from './debour.service';

describe('DebourService', () => {
  let service: DebourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DebourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
