import { TestBed } from '@angular/core/testing';

import { LogginsService } from './loggins.service';

describe('LogginsService', () => {
  let service: LogginsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogginsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
