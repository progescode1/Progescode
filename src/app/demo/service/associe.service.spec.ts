import { TestBed } from '@angular/core/testing';

import { AssocieService } from './associe.service';

describe('AssocieService', () => {
  let service: AssocieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssocieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
