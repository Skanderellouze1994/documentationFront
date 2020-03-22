import {FraudResultDetails} from '../TagPay/FraudResultDetails';
import {Scoring} from '../TagPay/Scoring';
import {Avs} from '../TagPay/Avs';


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
}
