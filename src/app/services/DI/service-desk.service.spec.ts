import { TestBed } from '@angular/core/testing';

import { ServiceDeskService } from './service-desk.service';

describe('ServiceDeskService', () => {
  let service: ServiceDeskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDeskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
