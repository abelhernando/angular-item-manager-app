import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  @ViewChild('searchInput', { static: true })
  searchInput: ElementRef<HTMLInputElement> = {} as ElementRef;

  @Output() searchedInput = new EventEmitter<string>();

  @Input() debounceTime = 600;

  public isOpen = false;

  private _searchSubscription!: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.searchListener();
  }

  ngOnDestroy(): void {
    if (this._searchSubscription) this._searchSubscription.unsubscribe();
  }

  searchListener(): void {
    this._searchSubscription = fromEvent(
      this.searchInput.nativeElement,
      'keyup'
    )
      .pipe(
        map((event: Event) => (event.target as HTMLInputElement).value),
        debounceTime(this.debounceTime),
        distinctUntilChanged(),
        tap({
          next: (value) => {
            this.isOpen = !!value;
          },
        })
      )
      .subscribe({
        next: (text) => this.searchedInput.emit(text),
      });
  }
}
