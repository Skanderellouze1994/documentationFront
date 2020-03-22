import {Result} from './Result';
import {Transaction} from './Transaction';
import {Authorization} from './Authorization';

export class BillingRecord {
  date: string;
  amount: string;
  status: string;
  result: Result;
  transaction: Transaction;
  authorization: Authorization;
  nbTry: string;
  rank: string;
}
