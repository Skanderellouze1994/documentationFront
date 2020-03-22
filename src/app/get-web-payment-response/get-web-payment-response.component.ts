import { Component, OnInit } from '@angular/core';
import {GetWebPaymentDetailsResponse} from '@app/_models/PayLine/GetWebPaymentDetailsResponse';
import {PaylineService} from '@app/_services/payline.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-get-web-payment-response',
  templateUrl: './get-web-payment-response.component.html',
  styleUrls: ['./get-web-payment-response.component.less']
})
export class GetWebPaymentResponseComponent implements OnInit {

  response: GetWebPaymentDetailsResponse;
  constructor(private webPaymentService: PaylineService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParamMap.get('paylinetoken'));
    this.webPaymentService.getWebPayment( this.route.snapshot.queryParamMap.get('paylinetoken')).subscribe(data => {
      console.log(data);
      this.response = data;
    });
  }



}
