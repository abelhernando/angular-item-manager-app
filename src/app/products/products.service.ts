import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private _url = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) {}

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

    return this.http.get<ProductsResponse>(url);
  }
}
