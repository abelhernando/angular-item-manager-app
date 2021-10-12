import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchComponent } from './search/search.component';
import { SortComponent } from './sort/sort.component';

@NgModule({
  declarations: [
    PaginationComponent,
    SearchComponent,
    SortComponent,
  ],
  imports: [CommonModule],
  exports: [PaginationComponent, SearchComponent, SortComponent],
})
export class SharedModule {}
