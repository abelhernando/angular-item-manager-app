import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import { ProductFavoritesService } from '../product-favorites/product-favorites.service';

export class Product {
  public readonly id: string;
  public readonly title: string;
  public readonly description: string;
  public readonly price: string;
  public readonly email: string;
  public readonly image: string;

  public readonly isFavorite$: Observable<boolean>;

  public readonly productFavoritesService: ProductFavoritesService;

  constructor(
    productItem: ProductRaw,
    productFavoritesService: ProductFavoritesService
  ) {
    this.productFavoritesService = productFavoritesService;

    this.id = uuidv4();
    this.title = productItem.title;
    this.description = productItem.description;
    this.price = productItem.price;
    this.email = productItem.email;
    this.image = productItem.image;

    this.isFavorite$ = this.productFavoritesService.items$.pipe(
      map((favorites) => !!favorites.find((f) => f.id === this.id))
    );
  }

  public get isFavorite(): boolean {
    const found = this.productFavoritesService
      .getItems()
      .find((f) => f.id === this.id);

    return !!found;
  }

  public toggleFavorite(): void {
    if (this.isFavorite) {
      this.productFavoritesService.removeItem(this.id);
    } else {
      this.productFavoritesService.setItem(this);
    }
  }
}
