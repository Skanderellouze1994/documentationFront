import { Component, OnInit } from '@angular/core';
import {PaylineService} from '@app/_services/payline.service';
import {FormControl, FormGroup} from '@angular/forms';
import {GetWebPaymentDetailsResponse} from '@app/_models/PayLine/GetWebPaymentDetailsResponse';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-get-web-payment',
  templateUrl: './get-web-payment.component.html',
  styleUrls: ['./get-web-payment.component.less']
})
export class GetWebPaymentComponent implements OnInit {


  public formData: FormGroup;

  token = null;
  dataHTML: GetWebPaymentDetailsResponse;

  constructor(private webPaymentService: PaylineService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('paylinetoken');
    this.formData = new FormGroup({
      token    : new FormControl()
    });
    console.log('paylinetoken');
    console.log(this.route.snapshot.paramMap.get('paylinetoken'));

  }

  getpayment() {
    if (this.token) {
      this.webPaymentService.getWebPayment( this.token).subscribe(data => {
        console.log(data);
        this.dataHTML = data;
      });
    } else {
      this.webPaymentService.getWebPayment( this.formData.controls.token.value).subscribe(data => {
        console.log(data);
        this.dataHTML = data;
      });
    }
  }

}
