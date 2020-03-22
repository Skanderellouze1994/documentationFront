import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoWebPaymentComponent } from './do-web-payment.component';

describe('DoWebPaymentComponent', () => {
  let component: DoWebPaymentComponent;
  let fixture: ComponentFixture<DoWebPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoWebPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoWebPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
