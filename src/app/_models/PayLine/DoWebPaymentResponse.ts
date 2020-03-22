import {Result} from './Result';

export class DoWebPaymentResponse {
  result: Result;
  token: string;
  redirectURL: string;
  stepCode: string;
  reqCode: string;
  method: string;
}
