import { TestBed } from '@angular/core/testing';

import { TrackRequestService } from './track-request.service';

describe('TrackRequestService', () => {
  let service: TrackRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
