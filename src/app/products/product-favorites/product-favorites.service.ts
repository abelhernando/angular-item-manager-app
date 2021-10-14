import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../product/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductFavoritesService {
  public favorites$: Observable<Product[]>;

  private favoriteBS = new BehaviorSubject<Product[]>([]);

  constructor() {
    this.favorites$ = this.favoriteBS.asObservable();
  }

  public setFavorite(favorite: Product): void {
    this.favoriteBS.next([...this.getFavorites(), favorite]);
  }

  public getFavorites(): Product[] {
    return this.favoriteBS.getValue();
  }

  public removeFavorite(favoriteId: string): void {
    const newFavorites = this.getFavorites().filter(
      (fav) => fav.id !== favoriteId
    );
    this.favoriteBS.next(newFavorites);
  }
}
