import { Injectable } from '@angular/core';
import { ProductsService } from '../products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {

  constructor(private productsService: ProductsService) { }

}
