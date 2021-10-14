import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { PAGE_DEFAULT, SEARCH_DEFAULT } from './products.constants';
import { ProductsService } from './products.service';

@Injectable()
export class ProductsResolver implements Resolve<ProductsResponse> {
  constructor(private productsService: ProductsService) {}

  resolve(): Observable<ProductsResponse> {
    return this.productsService.getProducts({
      search: SEARCH_DEFAULT,
      page: PAGE_DEFAULT,
    });
  }
}
