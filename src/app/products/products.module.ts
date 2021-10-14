import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFavoritesComponent } from './product-favorites/product-favorites.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { CardComponent } from '../shared/card/card.component';
import { ProductsResolver } from './products.resolver';

@NgModule({
  declarations: [ProductListComponent, ProductFavoritesComponent],
  imports: [CommonModule, SharedModule, CoreModule],
  providers: [ProductsResolver],
})
export class ProductsModule {}
