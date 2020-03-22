import {Result} from './Result';
import {Payment} from './Payment';
import {PrivateDataList} from './PrivateDataList';
import {Order} from './Order';
import {Buyer} from './Buyer';
import {Transaction} from './Transaction';
import {Authorization} from '../TagPay/Authorization';
import {BillingRecordList} from '../TagPay/BillingRecordList';
import {Authentication3DSecure} from '../TagPay/Authentication3DSecure';
import {CardOut} from './CardOut';
import {Wallet} from '../TagPay/Wallet';
import {ContractNumberWalletList} from '../TagPay/ContractNumberWalletList';
import {BankAccountData} from '../TagPay/BankAccountData';
import {SubMerchant} from './SubMerchant';
import {ExtendedCard} from './ExtendedCard';
import {PaymentAdditionalList} from './PaymentAdditionalList';

export class GetWebPaymentDetailsResponse {
  result: Result;
  transaction: Transaction;
  payment: Payment;
  authorization: Authorization;
  privateDataList: PrivateDataList;
  paymentRecordId: string;
  billingRecordList: BillingRecordList;
  authentication3DSecure: Authentication3DSecure;
  card: CardOut;
  extendedCard: ExtendedCard;
  order: Order;
  paymentAdditionalList: PaymentAdditionalList;
  media: string;
  numberOfAttempt: string;
  wallet: Wallet;
  contractNumberWalletList: ContractNumberWalletList;
  contractNumber: string;
  bankAccountData: BankAccountData;
  subMerchant: SubMerchant;
  buyer: Buyer;
}
