import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs';
import {DoWebPaymentResponse} from '@app/_models/PayLine/DoWebPaymentResponse';
import {GetWebPaymentDetailsResponse} from '@app/_models/PayLine/GetWebPaymentDetailsResponse';
import {environment} from '@environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {log} from 'util';
import {Authorization} from '@app/_models/TagPay/Authorization';
import {AuthenticationService} from '@app/_services/authentication.service';
import {headersToString} from 'selenium-webdriver/http';
@Injectable({
  providedIn: 'root'
})
export class PaylineService {


  private baseUrl = 'https://documentationback.eu-de.mybluemix.net';
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }



  doWebPayment(amount, currency): Observable<DoWebPaymentResponse> {
    console.log(Object);
    // @ts-ignore
    return this.http.get<GetWebPaymentDetailsResponse>(`${this.baseUrl}` + `/do/` + amount + `/` + currency  );
  }

  getWebPayment(token): Observable<GetWebPaymentDetailsResponse> {
    console.log(Object);
    return this.http.get<GetWebPaymentDetailsResponse>(`${this.baseUrl}` + `/getp/` + token);
  }
}
