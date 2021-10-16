import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductListComponent } from './product-list.component';
import { ProductListService } from './product-list.service';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let mockProduct: any;
  let spy: any;
  let productListService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;

    productListService = fixture.debugElement.injector.get(ProductListService);

    mockProduct = { title: 'bolso' };
  });

  describe('when onSearch', () => {
    it('should call the setSearch with the same params', (done) => {
      const searchedValue = 'bolso';

      spy = spyOn<any>(productListService, 'setSearch').and.returnValue(
        Promise.resolve(mockProduct)
      );
      component.onSearch(searchedValue);
      expect(spy.calls.any()).toBeTrue();
      expect(productListService.setSearch).toHaveBeenCalledWith(searchedValue);
      done();
    });
  });

  describe('when onPageChange', () => {
    it('should call the setPage with the same params', (done) => {
      const pageValue = 2;

      spy = spyOn<any>(productListService, 'setPage').and.returnValue(
        Promise.resolve(mockProduct)
      );
      component.onPageChange(pageValue);
      expect(spy.calls.any()).toBeTrue();
      expect(productListService.setPage).toHaveBeenCalledWith(pageValue);
      done();
    });
  });

  describe('when onSort', () => {
    it('should call the setSort with the same params', (done) => {
      const sortValue = { field: 'title', sort: 'asc' };

      spy = spyOn<any>(productListService, 'setSort').and.returnValue(
        Promise.resolve(mockProduct)
      );
      component.onSort(sortValue as Sort);
      expect(spy.calls.any()).toBeTrue();
      expect(productListService.setSort).toHaveBeenCalledWith(sortValue);
      done();
    });
  });
});
