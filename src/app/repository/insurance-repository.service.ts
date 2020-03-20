import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InsuranceRepositoryService {
  seq: any;
  customerDiscountValues: any;
  paymentMethodDiscountValues: any;
  campaignDiscountValues: any;

  constructor() {
    this.seq = [
      {name: 'every year', value: 1},
      {name: 'every half a year', value: 2},
      {name: 'quarterly', value: 3},
      {name: 'per month', value: 4},
    ];
    this.customerDiscountValues = [
      {name: '0 %', value: 1},
      {name: '10 %', value: 2},
    ];
    this.paymentMethodDiscountValues = [
      {name: 'cash', value: 1},
      {name: 'bank k&h', value: 2},
      {name: 'bank', value: 1},
      {name: 'bank', value: 1},
    ];
    this.campaignDiscountValues = [
      {name: '0 %', value: 1},
      {name: '10 %', value: 2},
    ];

  }

  getSeq() {
    return this.seq;
  }

  getMaxNumberOfRelatives(): number[] {
    return Array.from(Array(5)).map((x, i) => i + 1);
    ;
  }

  getCustomerDiscountValues(): any [] {
    return this.campaignDiscountValues;
  }

  getCampaignDiscountValues(): any [] {
    return this.campaignDiscountValues;
  }

  getPaymentMethodDiscountValues(): any[] {
    return this.paymentMethodDiscountValues;
  }
}

