import { TestBed } from '@angular/core/testing';

import { URIIpgService } from './uriipg.service';

describe('URIIpgService', () => {
  let service: URIIpgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(URIIpgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
