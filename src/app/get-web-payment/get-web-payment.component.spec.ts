import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetWebPaymentComponent } from './get-web-payment.component';

describe('GetWebPaymentComponent', () => {
  let component: GetWebPaymentComponent;
  let fixture: ComponentFixture<GetWebPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetWebPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetWebPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
