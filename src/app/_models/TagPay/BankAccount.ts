import {Iban} from './Iban';
import {Rib} from './Rib';

export class BankAccount {
  bankCode: string;
  bankNumber: string;
  iban: Iban;
  rib: Rib;
}
