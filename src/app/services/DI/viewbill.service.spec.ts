import { TestBed } from '@angular/core/testing';

import { ViewbillService } from './viewbill.service';

describe('ViewbillService', () => {
  let service: ViewbillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewbillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
