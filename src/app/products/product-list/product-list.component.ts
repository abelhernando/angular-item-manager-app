import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concat } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {

  private _initialResponse$ = this.activatedRoute.data.pipe(
    map(({ products }) => products),
    take(1)
  );

  private productResponse$ = this.productListService.productResponse$;
  public state$ = concat(this._initialResponse$, this.productResponse$);

  constructor(
    private activatedRoute: ActivatedRoute,
    private productListService: ProductListService
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
