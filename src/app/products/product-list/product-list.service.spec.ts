import { of } from 'rxjs';
import { ProductsService } from '../products.service';
import { ProductListService } from './product-list.service';

describe('ProductListService', () => {
  let service: ProductListService;

  let mockProductsService: ProductsService;

  beforeEach(() => {
    mockProductsService = jasmine.createSpyObj('productsService', {
      getProducts: of({
        products: [],
        totalCount: 1,
        pageCount: 1,
      }),
    });

    service = new ProductListService(mockProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('productResponse$', () => {
    describe('when setSearch is called', () => {
      it('should call productsService with the correct search param', (done) => {
        service.setSearch('bolso');

        service.productResponse$.subscribe(() => {
          expect(mockProductsService.getProducts).toHaveBeenCalledWith({
            search: 'bolso',
            page: 1,
            sort: {},
          });
          done();
        });
      });
    });

    describe('when setPage is called', () => {
      it('should call productsService with the correct page param', (done) => {
        service.setPage(2);

        service.productResponse$.subscribe(() => {
          expect(mockProductsService.getProducts).toHaveBeenCalledWith({
            search: '',
            page: 2,
            sort: {},
          });
          done();
        });
      });
    });

    describe('when setSort is called', () => {
      it('should call productsService with the correct sort params', (done) => {
        service.setSort({ field: 'title', sort: 'asc' });

        service.productResponse$.subscribe(() => {
          expect(mockProductsService.getProducts).toHaveBeenCalledWith({
            search: '',
            page: 1,
            sort: { field: 'title', sort: 'asc' },
          });
          done();
        });
      });
    });
  });
});
