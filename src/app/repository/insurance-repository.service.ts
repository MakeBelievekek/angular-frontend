import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsuranceRepositoryService {
  seq: any;


  constructor() {
    this.seq = [
      {name: 'every year', value: 1},
      {name: 'every half a year', value: 2},
      {name: 'quarterly', value: 3},
      {name: 'per month', value: 4},
    ]
  }

  getSeq() {
    return this.seq;
  }

  getMaxNumberOfRelatives(): number[] {
    return Array.from(Array(5)).map((x, i) => i + 1);;
  }
}
