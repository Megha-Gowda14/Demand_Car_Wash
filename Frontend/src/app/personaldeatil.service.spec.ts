import { TestBed } from '@angular/core/testing';

import { PersonaldeatilService } from './personaldeatil.service';

describe('PersonaldeatilService', () => {
  let service: PersonaldeatilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaldeatilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
