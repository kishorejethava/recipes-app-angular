import { TestBed } from '@angular/core/testing';

import { RecipeApiService } from './recipe-api.service';

describe('RecipeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeApiService = TestBed.get(RecipeApiService);
    expect(service).toBeTruthy();
  });
});
