import { Component } from '@angular/core';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductFavoritesService } from './product-favorites.service';

@Component({
  selector: 'app-product-favorites',
  templateUrl: './product-favorites.component.html',
  styleUrls: ['./product-favorites.component.scss'],
})
export class ProductFavoritesComponent {
  public modalOpen = false;
  public favorites$ = this.productFavoritesService.favorites$;
  public displayedFavorites$ = this.favorites$;

  constructor(private productFavoritesService: ProductFavoritesService) {}

  onClickFavorites() {
    this.modalOpen = !this.modalOpen;
  }

  searchFavorites(text: string) {
    this.displayedFavorites$ = this.favorites$.pipe(
      map((favorites) =>
        favorites.filter((f) =>
          f.title.toLowerCase().includes(text.toLowerCase())
        )
      )
    );
  }
}
