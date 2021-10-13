import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductsListService } from './products-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  private _initialResponse$ = this.activatedRoute.data.pipe(
    map(({ products }) => products)
  );

  private productResponse$ = this.productListService.productResponse$;
  public state$ = merge(this._initialResponse$, this.productResponse$);

  constructor(
    private activatedRoute: ActivatedRoute,
    private productListService: ProductsListService
  ) {}

  onSearch(value: string): void {
    this.productListService.setSearch(value);
  }

  onPageChange(page: number): void {
    this.productListService.setPage(page);
  }

  onSort(sort: Sort): void {
    this.productListService.setSort(sort);
  }
}
