import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() pageCount = 0;
  @Output() changePage: EventEmitter<number> = new EventEmitter<number>();

  private _currentPage = 1;

  constructor() {}

  ngOnInit(): void {}

  get currentPage(): number {
    return this._currentPage;
  }

  set currentPage(pageNumber) {
    this._currentPage = pageNumber;
    this.changePage.emit(this.currentPage);
  }

  onSetPage(event: any): void {
    this.currentPage = event?.target?.value;
  }

  onSelectPage(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

  onNextPage(): void {
    this.currentPage++;
  }

  onPreviousPage(): void {
    this.currentPage--;
  }
}
