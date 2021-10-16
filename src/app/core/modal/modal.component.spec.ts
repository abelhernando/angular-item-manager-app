import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let emitEvent: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    emitEvent = spyOn<any>(component.close, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onCloseClick', () => {
    it('should emit a close event', () => {
      component.onCloseClick();
      expect(emitEvent).toHaveBeenCalled();
    });
  });
});
