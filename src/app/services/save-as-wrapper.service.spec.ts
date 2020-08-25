import { TestBed } from '@angular/core/testing';

import { SaveAsWrapperService } from './save-as-wrapper.service';

describe('SaveAsWrapperService', () => {
  let service: SaveAsWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveAsWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
