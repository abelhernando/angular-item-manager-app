import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  totalItems = 0;
  pageCount = 0;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(pageNumber: number = 1): void {
    this.productService.getProductList(pageNumber).subscribe(
      (response) => {
        console.log('~ response', response);
        this.productList = response.products;
        this.totalItems = response.totalCount;
        this.pageCount = response.pageCount;
      },
      (err) => console.warn(err)
    );
  }

  onPageChange(pageNumber: number = 1): void {
    this.getProductList(pageNumber);
  }
  onSearchItem(item: any): void {
    this.productList = item.items;
    this.totalItems = item.totalCount;
    this.pageCount = item.pageCount;
  }
}
