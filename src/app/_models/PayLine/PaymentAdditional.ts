import {Transaction} from './Transaction';
import {Payment} from './Payment';
import {Authorization} from '../TagPay/Authorization';
import {Authentication3DSecure} from '../TagPay/Authentication3DSecure';
import {CardOut} from './CardOut';
import {ExtendedCardType} from '../TagPay/ExtendedCardType';

export class PaymentAdditional {
  transaction: Transaction;
  payment: Payment;
  authorization: Authorization;
  authentication3DSecure: Authentication3DSecure;
  card: CardOut;
  extendedCard: ExtendedCardType;
}
