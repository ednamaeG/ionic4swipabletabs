import { TestBed } from '@angular/core/testing';

import { AuthStorageProviderService } from './auth-storage-provider.service';

describe('AuthStorageProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthStorageProviderService = TestBed.get(AuthStorageProviderService);
    expect(service).toBeTruthy();
  });
});
