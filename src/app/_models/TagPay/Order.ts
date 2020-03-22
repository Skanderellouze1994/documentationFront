import {Details} from './Details';

export class Order {
  ref: string;
  origin: string;
  country: string;
  taxes: string;
  amount: string;
  currency: string;
  date: string;
  details: Details;
  deliveryTime: string;
  deliveryMode: string;
  deliveryExpectedDate: string;
  deliveryExpectedDelay: string;
  deliveryCharge: string;
  discountAmount: string;
  otaPackageType: string;
  otaDestinationCountry: string;
  bookingReference: string;
  orderDetail: string;
  orderExtended: string;
  orderOTA: string;

}
