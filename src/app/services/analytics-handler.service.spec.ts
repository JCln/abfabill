import { TestBed } from '@angular/core/testing';

import { AnalyticsHandlerService } from './analytics-handler.service';

describe('AnalyticsHandlerService', () => {
  let service: AnalyticsHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyticsHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
