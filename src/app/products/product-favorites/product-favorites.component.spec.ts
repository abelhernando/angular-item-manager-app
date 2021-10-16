import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductFavoritesComponent } from './product-favorites.component';

describe('ProductFavoritesComponent', () => {
  let component: ProductFavoritesComponent;
  let fixture: ComponentFixture<ProductFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFavoritesComponent],
      // imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a modal on clicking favorites', (done) => {
    component.onClickFavorites();
    expect(component.modalOpen).toBeTrue();
    expect(fixture.debugElement.query(By.css('.modal'))).toBeNull();
    fixture.detectChanges();
    done();
  });
});
