import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
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
        Object.entries(params[key]).forEach(([k, v]) => {
          if (!params.sort.field) return;
          url = `${url + operator + k}=${v}`;
        });
      } else {
        url = `${url + operator + key}=${value}`;
      }
    });

    return url;
  }

  public getProducts(params: GetProductsParams): Observable<ProductsResponse> {
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
      }),
      catchError((err: Error) => {
        console.warn('Error on the HTTP request: ', err);
        return of({
          products: [],
          totalCount: 0,
          pageCount: 0,
        });
      })
    );
  }
}
