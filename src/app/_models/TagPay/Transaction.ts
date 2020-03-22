import {CardOut} from './CardOut';
import {ExtendedCardType} from './ExtendedCardType';
import {FraudResultDetails} from './FraudResultDetails';
import {Avs} from './Avs';
import {Payment} from './Payment';
import {PointOfSell} from './PointOfSell';
import {Scoring} from './Scoring';

export class Transaction {
  id: string;
  date: string;
  isDuplicated: string;
  isPossibleFraud: string;
  fraudResult: string;
  fraudResultDetails: FraudResultDetails;
  explanation: string;
  threeDSecure: string;
  softDescriptor: string;
  score: string;
  scoring: Scoring;
  externalWalletType: string;
  externalWalletContractNumber: string;
  partnerAdditionalData: string;
  avs: Avs;
  customerId: string;
  type: string;
  orderReference: string;
  payment: Payment;
  pointOfSell: PointOfSell;
  card: CardOut;
  extendedCard: ExtendedCardType;

}
