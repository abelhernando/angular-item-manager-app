import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent {
  @Output() sortSelect = new EventEmitter<Sort>();
  isOpen = false;
  order = 'asc';
  isAscOrder = true;
  field = '';

  constructor() {}

  onSelectSort(event: Event): void {
    const field: any = (event.target as HTMLInputElement).value;
    this.field = field;

    const sort = {
      field,
      order: this.order,
    };
    this.sortSelect.emit(sort);
  }

  changeOrder(): void {
    this.isAscOrder = !this.isAscOrder;
    this.order = this.isAscOrder ? 'asc' : 'desc';
    const sort: any = {
      field: this.field,
      order: this.order,
    };
    this.sortSelect.emit(sort);
  }
}
