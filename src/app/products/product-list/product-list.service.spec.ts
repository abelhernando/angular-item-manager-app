import { TestBed } from '@angular/core/testing';

import { ProductsListService } from './product-list.service';

describe('ProductsListService', () => {
  let service: ProductsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
