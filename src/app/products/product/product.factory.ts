import { Injectable } from '@angular/core';
import { ProductFavoritesService } from '../product-favorites/product-favorites.service';
import { Product } from './Product';

@Injectable({
  providedIn: 'root',
})
export class ProductFactory {
  constructor(private productFavoritesService: ProductFavoritesService) {}

  create(productRaw: ProductRaw): Product {
    return new Product(productRaw, this.productFavoritesService);
  }
}
