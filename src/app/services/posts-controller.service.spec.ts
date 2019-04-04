import { TestBed } from '@angular/core/testing';

import { PostsControllerService } from './posts-controller.service';

describe('PostsControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostsControllerService = TestBed.get(PostsControllerService);
    expect(service).toBeTruthy();
  });
});
