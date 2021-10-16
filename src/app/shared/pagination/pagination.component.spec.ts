import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let emitEvent: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    emitEvent = spyOn<any>(component.changePage, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSetPage', () => {
    it('should emit a value with the current page', () => {
      const pageValue = 2;
      const event = {
        target: {
          value: pageValue,
        },
      };
      component.onSetPage(event);
      expect(emitEvent).toHaveBeenCalledWith(pageValue);
    });
  });

  describe('onSelectPage', () => {
    it('should emit a value with the selected page', () => {
      const pageValue = 3;

      component.onSelectPage(pageValue);
      expect(emitEvent).toHaveBeenCalledWith(pageValue);
    });
  });

  describe('onNextPage', () => {
    it('should emit a value with the next page', () => {
      const pageValue = 2;
      component.onSelectPage(pageValue);

      component.onNextPage();
      expect(emitEvent).toHaveBeenCalledWith(pageValue + 1);
    });
  });

  describe('onPreviousPage', () => {
    it('should emit a value with the previous page', () => {
      const pageValue = 2;
      component.onSelectPage(pageValue);

      component.onPreviousPage();
      expect(emitEvent).toHaveBeenCalledWith(pageValue - 1);
    });
  });
});
