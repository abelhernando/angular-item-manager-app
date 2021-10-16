import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortComponent } from './sort.component';

describe('SortComponent', () => {
  let component: SortComponent;
  let fixture: ComponentFixture<SortComponent>;
  let emitEvent: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    emitEvent = spyOn<any>(component.sortSelect, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSelectSort', () => {
    it('should emit the sort by the selected field', () => {
      const field = 'title';
      const event: any = {
        target: {
          value: field,
        },
      };
      const expected = {
        field,
        order: 'asc',
      };
      component.onSelectSort(event as Event);
      expect(emitEvent).toHaveBeenCalledWith(expected);
    });
  });

  describe('changeOrder', () => {
    it('should emit the sort in the selected order', () => {
      const field = 'title';
      const event: any = {
        target: {
          value: field,
        },
      };
      const expected = {
        field,
        order: 'desc',
      };
      component.onSelectSort(event as Event);

      component.changeOrder();
      expect(emitEvent).toHaveBeenCalledWith(expected);
    });
  });
});
