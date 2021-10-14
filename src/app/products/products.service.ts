import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ProductFactory } from './product/product.factory';

const PRODUCTS_CACHE = new Map();

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private _url = `${environment.apiUrl}/products`;

  constructor(
    private http: HttpClient,
    private productFactory: ProductFactory
  ) {}

  private getUrlWithParams(params: GetProductsParams): string {
    let url = this._url;
    let operator = '?';
    Object.entries(params).forEach(([key, value]) => {
      if (!value) return;
      if (url.includes('?')) operator = '&';
      if (key === 'sort') {
        Object.entries(params[key]).forEach(([key, value]) => {
          if (!params.sort.field) return;
          url = `${url + operator + key}=${value}`;
        });
      } else {
        url = `${url + operator + key}=${value}`;
      }
    });

    return url;
  }

  public getProducts(params: GetProductsParams) {
    const url = this.getUrlWithParams(params);

    if (PRODUCTS_CACHE.has(url)) {
      return of(PRODUCTS_CACHE.get(url));
    }

    return this.http.get<ProductsResponse>(url).pipe(
      map((response) => ({
        ...response,
        products: response.products.map((product) =>
          this.productFactory.create(product)
        ),
      })),
      tap({
        next: (response) => PRODUCTS_CACHE.set(url, response),
      })
    );
  }
}
