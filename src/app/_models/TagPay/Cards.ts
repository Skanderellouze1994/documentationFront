import {Card} from './Card';
import {Address} from './Address';
import {ExtendedCardType} from './ExtendedCardType';

export class Cards {
  walletId: string;
  lastName: string;
  firstName: string;
  email: string;
  shippingAddress: Address;
  card: Card;
  cardInd: string;
  comment: string;
  isDisabled: string;
  disableDate: string;
  extendedCard: ExtendedCardType;
  default: string;
}
