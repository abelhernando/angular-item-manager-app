import { Product } from '../product/Product';
import { ProductFavoritesService } from './product-favorites.service';

describe('ProductFavoritesService', () => {
  let service: ProductFavoritesService;
  let items: Product[];

  const product = {
    id: '123',
    title: 'Bolso piel marca Hoss',
  };

  beforeEach(() => {
    service = new ProductFavoritesService();
    items = service.getItems();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getItems', () => {
    it('should retrieve all the favorites', () => {
      expect(items).toEqual([]);
    });

    describe('when setItem is called', () => {
      it('should add the item to favorites', () => {
        service.setItem(product as Product);
        items = service.getItems();
        expect(items.length).toBe(1);
        expect(items[0]).toEqual(product as Product);
      });
    });

    describe('when removeItem is called', () => {
      it('should remove the item from favorites', () => {
        service.setItem(product as Product);
        items = service.getItems();
        expect(items.length).toBe(1);
        expect(items[0]).toEqual(product as Product);

        service.removeItem(product.id);
        items = service.getItems();
        expect(items).toEqual([]);
      });
    });
  });
});
