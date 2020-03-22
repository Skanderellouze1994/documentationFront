
import {PaymentData} from './PaymentData';

export class Card {
  encryptionKeyId: string;
  encryptedData: string;
  number: string;
  type: string;
  expirationDate: string;
  cvx: string;
  ownerBirthdayDate: string;
  password: string;
  cardPresent: string;
  cardholder: string;
  token: string;
  paymentData: PaymentData;

}
