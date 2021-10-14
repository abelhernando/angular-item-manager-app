import { Observable } from 'rxjs';

export interface CollectionService<T> {
  items$: Observable<T[]>;
  setItem: (item: T) => void;
  getItems: () => T[];
  removeItem: (itemId: string) => void;
  getItemById?: (itemId: string) => T;
}
