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

  private currentProductListSubject: BehaviorSubject<ProductsResponse>;
  public currentProductList: Observable<ProductsResponse>;

  constructor(private http: HttpClient) {
    this.currentProductListSubject = new BehaviorSubject<ProductsResponse>({
      products: [],
      totalCount: 0,
      pageCount: 0,
    });
    this.currentProductList = this.currentProductListSubject.asObservable();
  }
  getProductList(pageNumber: number) {
    const url = `${this._url}?page=${pageNumber}`;
    return this.http.get<ProductsResponse>(this._url).pipe(
      map((products) => {
        this.currentProductListSubject.next(products);
        return products;
      })
    );
  }

  searchProduct(value: string) {
    const url = `${this._url}?search=${value}`;
    return this.http.get<ProductsResponse>(url).pipe(
      map((products) => {
        this.currentProductListSubject.next(products);
        return products;
      })
    );
  }
}
