import { TestBed } from '@angular/core/testing';

import { SwipableService } from './swipable.service';

describe('SwipableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwipableService = TestBed.get(SwipableService);
    expect(service).toBeTruthy();
  });
});
