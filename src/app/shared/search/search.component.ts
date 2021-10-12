import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ProductsService } from 'src/app/products/products.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @ViewChild('searchInput', { static: true })
  searchInput: ElementRef<HTMLInputElement> = {} as ElementRef;

  @Output() searchedItem: EventEmitter<ProductsResponse> =
    new EventEmitter<ProductsResponse>();

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.searchListener();
  }

  searchListener() {
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        map((event: Event) => (event.target as HTMLInputElement).value),
        debounceTime(600),
        distinctUntilChanged()
      )
      .subscribe((text) => this.searchAction(text));
  }

  searchAction(searchedText: string) {
    this.productsService.searchProduct(searchedText).subscribe(
      (response) => {
        this.searchedItem.emit(response);
      },
      (err) => console.warn(err)
    );
  }
}
