import {TicketSend} from './TicketSend';
import {Contract} from './Contract';
import {VirtualTerminal} from './VirtualTerminal';
import {CustomPaymentPageCode} from './CustomPaymentPageCode';

export class PointOfSell {
  id: string;
  siret: string;
  codeMcc: string;
  label: string;
  webmasterEmail: string;
  comments: string;
  webstoreURL: string;
  notificationURL: string;
  privateLifeURL: string;
  saleCondURL: string;
  buyerMustAcceptSaleCond: boolean;
  endOfPaymentRedirection: boolean;
  ticketSend: TicketSend;
  contracts: Contract[];
  virtualTerminal: VirtualTerminal;
  customPaymentPageCodeList: CustomPaymentPageCode[];
}
