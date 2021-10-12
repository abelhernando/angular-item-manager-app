import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFavoritesComponent } from './product-favorites/product-favorites.component';



@NgModule({
  declarations: [ProductListComponent, ProductFavoritesComponent],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
