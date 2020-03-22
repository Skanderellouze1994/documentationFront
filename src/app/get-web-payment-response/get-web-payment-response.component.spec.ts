import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetWebPaymentResponseComponent } from './get-web-payment-response.component';

describe('GetWebPaymentResponseComponent', () => {
  let component: GetWebPaymentResponseComponent;
  let fixture: ComponentFixture<GetWebPaymentResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetWebPaymentResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetWebPaymentResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
