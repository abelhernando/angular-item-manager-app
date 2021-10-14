import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CollectionService } from 'src/app/models';
import { Product } from '../product/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductFavoritesService implements CollectionService<Product> {
  public items$: Observable<Product[]>;

  private favoriteBS = new BehaviorSubject<Product[]>([]);

  constructor() {
    this.items$ = this.favoriteBS.asObservable();
  }

  public setItem(favorite: Product): void {
    this.favoriteBS.next([...this.getItems(), favorite]);
  }

  public getItems(): Product[] {
    return this.favoriteBS.getValue();
  }

  public removeItem(favoriteId: string): void {
    const newFavorites = this.getItems().filter((fav) => fav.id !== favoriteId);
    this.favoriteBS.next(newFavorites);
  }
}
