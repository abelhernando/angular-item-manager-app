import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('that has a title', () => {
    it('should be an h1 element', () => {
      expect(typeof component.title).toBe('string');

      const title = fixture.debugElement.query(By.css('h1')).nativeElement;
      expect(typeof title.innerHTML).toBe('string');
    });

    it('should have the correct title', () => {
      fixture.componentInstance.title = 'Item Manager App';
      expect(fixture.componentInstance.title).toEqual('Item Manager App');
    });
  });
});
