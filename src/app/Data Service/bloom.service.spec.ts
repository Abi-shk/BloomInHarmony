import { TestBed } from '@angular/core/testing';

import { BloomService } from './bloom.service';

describe('BloomService', () => {
  let service: BloomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
