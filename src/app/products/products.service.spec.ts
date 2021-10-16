import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ProductFactory } from './product/product.factory';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  let params: GetProductsParams;
  let item;

  let mockHttpService: HttpClient;
  let mockProductFactory: ProductFactory;

  const title = 'Bolso piel marca Hoss';

  beforeEach(() => {
    item = {
      title: 'Bolso piel marca Hoss',
    };
    mockHttpService = jasmine.createSpyObj('httpService', {
      get: of({
        products: [item],
        totalCount: 1,
        pageCount: 1,
      }),
    });
    mockProductFactory = jasmine.createSpyObj('productFactory', {
      create: item,
    });

    params = {
      search: '',
      page: 1,
      sort: {},
    };

    service = new ProductsService(mockHttpService, mockProductFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getProducts(params)', () => {
    it('should return the product values', (done) => {
      service.getProducts(params).subscribe({
        next: ({ products }) => {
          expect(products.length).toBe(1);
          expect(products[0].title).toBe(title);
          done();
        },
      });
    });
  });
});
