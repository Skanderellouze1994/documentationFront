import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import {DoWebPaymentComponent} from '@app/do-web-payment/do-web-payment.component';
import {GetWebPaymentComponent} from '@app/get-web-payment/get-web-payment.component';
import {GetWebPaymentResponseComponent} from '@app/get-web-payment-response/get-web-payment-response.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'dowebpayment', component: DoWebPaymentComponent, canActivate: [AuthGuard] },
    { path: 'getwebPayment', component: GetWebPaymentComponent, canActivate: [AuthGuard] },
    { path: 'getwebPaymentresp', component: GetWebPaymentResponseComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
