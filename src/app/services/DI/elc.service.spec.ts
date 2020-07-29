import { TestBed } from '@angular/core/testing';

import { ElcService } from './elc.service';

describe('ElcService', () => {
  let service: ElcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
