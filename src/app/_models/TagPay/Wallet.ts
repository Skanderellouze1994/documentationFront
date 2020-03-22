import {Address} from './Address';
import {Card} from './Card';

export class Wallet {
  walletId: string;
  lastName: string;
  firstName: string;
  email: string;
  shippingAddress: Address;
  card: Card;
  comment: string;
  default: string;
  cardStatus: string;
  cardBrand: string;
}
