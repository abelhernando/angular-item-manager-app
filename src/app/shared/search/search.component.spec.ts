import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let emitEvent: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    emitEvent = spyOn<any>(component.searchedInput, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('searchListener', () => {
    it('should emit the searched value', (done) => {
      const searchedValue = 'bolso';

      const nativeElement = fixture.nativeElement;
      const input = nativeElement.querySelector('input');
      input.value = searchedValue;
      input.dispatchEvent(new Event('keyup'));

      setTimeout(() => {
        fixture.detectChanges();
        expect(emitEvent).toHaveBeenCalledWith(searchedValue);
        done();
      }, 600);
    });
  });
});
