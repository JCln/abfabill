import { TestBed } from '@angular/core/testing';

import { ViewBillService } from './view-bill.service';

describe('ViewBillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewBillService = TestBed.get(ViewBillService);
    expect(service).toBeTruthy();
  });
});
