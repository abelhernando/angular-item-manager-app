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

  private currentProductListSubject: BehaviorSubject<any>;
  public currentProductList: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentProductListSubject = new BehaviorSubject<any>([]);
    this.currentProductList = this.currentProductListSubject.asObservable();
  }
  getProductList() {
    return this.http.get<any>(this._url).pipe(
      map((products) => {
        this.currentProductListSubject.next(products);
        return products;
      })
    );
  }
}
