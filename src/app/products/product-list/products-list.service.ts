import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PAGE_DEFAULT, SEARCH_DEFAULT } from '../products.constants';
import { ProductsService } from '../products.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsListService {
  private _search$ = new BehaviorSubject<string>(SEARCH_DEFAULT);

  private _page$ = new BehaviorSubject<number>(PAGE_DEFAULT);

  private _sort$ = new BehaviorSubject<Sort>({});

  private params$ = combineLatest([
    this._page$,
    this._search$,
    this._sort$,
  ]).pipe(
    map(([page, search, sort]) => {
      return {
        page,
        search,
        sort,
      };
    })
  );

  public productResponse$ = this.params$.pipe(
    switchMap((params) => this.productsService.getProducts(params))
  );

  constructor(private productsService: ProductsService) {}

  public setPage(page: number): void {
    this._page$.next(page);
  }

  public setSearch(search: string): void {
    this._search$.next(search);
  }

  public setSort(sort: Sort): void {
    this._sort$.next(sort);
  }
}
