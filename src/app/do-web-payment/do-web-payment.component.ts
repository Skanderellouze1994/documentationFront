import { Component, OnInit } from '@angular/core';
import {PaylineService} from '@app/_services/payline.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-do-web-payment',
  templateUrl: './do-web-payment.component.html',
  styleUrls: ['./do-web-payment.component.less']
})
export class DoWebPaymentComponent implements OnInit {

  public formData: FormGroup;

  token: string;

  constructor(private webPaymentService: PaylineService, private router: Router) { }

  ngOnInit() {
    this.formData = new FormGroup({
      amount    : new FormControl(),
      currency    : new FormControl()
    });
  }

  dopayment() {
    console.log(this.formData.controls.amount.value);
    if (this.formData.controls.amount.value === '378' && this.formData.controls.currency.value === '978') {
      this.webPaymentService.doWebPayment(this.formData.controls.amount.value , this.formData.controls.currency.value).subscribe(data => {
        console.log(data);
        window.location.href = data.redirectURL;
        this.token = data.token;
      });
    }
  }

}
