import {TechnicalData} from './TechnicalData';
import {BankAccount} from './BankAccount';
import {Interlocutor} from './Interlocutor';
import {Contribution} from './Contribution';

enum SettlementType {
  Manual = 'Manual',
  Now = 'Manual',
  Day1 = '1Day',
  Day2 = '2Day',
  Day3 = '3Day',
  Day4 = '4Day',
  Day5 = '5Day',
  Day6 = '6Day',
  Day7 = '7Day'
}

export class Contract {
  cardType: string;
  label: string;
  contractNumber: string;
  currency: string;
  settlementType: SettlementType;
  maxAmountPerTransaction: number;
  technicalData: TechnicalData;
  bankAccount: BankAccount;
  acquirerInterlocutor: Interlocutor;
  description: string;
  logoEnable: boolean;
  smallLogoMime: string;
  smallLogo: string;
  normalLogoMime: string;
  normalLogo: string;
  contribution: Contribution;
  enrolment3DS: string;
}
