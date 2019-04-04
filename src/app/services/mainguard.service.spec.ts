import { TestBed } from '@angular/core/testing';

import { MainguardService } from './mainguard.service';

describe('MainguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainguardService = TestBed.get(MainguardService);
    expect(service).toBeTruthy();
  });
});
