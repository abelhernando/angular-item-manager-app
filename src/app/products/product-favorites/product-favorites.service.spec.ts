import { TestBed } from '@angular/core/testing';

import { ProductFavoritesService } from './product-favorites.service';

describe('ProductFavoritesService', () => {
  let service: ProductFavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductFavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
