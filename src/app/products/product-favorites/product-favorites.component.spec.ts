import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFavoritesComponent } from './product-favorites.component';

describe('ProductFavoritesComponent', () => {
  let component: ProductFavoritesComponent;
  let fixture: ComponentFixture<ProductFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFavoritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
