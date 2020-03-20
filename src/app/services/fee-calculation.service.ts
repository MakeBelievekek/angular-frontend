import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeeCalcFormDataModel } from '../models/feeCalcFormData.model';
import { NetFeeModel } from '../models/netFee.model';
import { ResultModel } from '../models/result.model';

const API_URL = 'https://formulative.io/api/calculate';
const API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2Zvcm11bGF0aXZlLmlvL2FwaSIsInN1YiI6IjM5YTI5YWFiNmNkMDQ0MTVjMzNlZjIwNWMxZGRhNzdjIiwiYXVkIjoiaHR0cHM6Ly9mb3JtdWxhdGl2ZS5pby9hcGkiLCJleHAiOjE1ODQ4MTQwODMsIm93bmVyIjoiLU0yWXBUdExzZURaZnlRc290eVkiLCJpYXQiOjE1ODQ3Mjc2ODN9.gvl7CyfsFq82iB0WlSFsSl5BT6oydPfFgFrIpc46Yyc';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json; charset=utf-8',
    'authorization': 'Bearer ' + API_TOKEN,
  }),
};

@Injectable({
  providedIn: 'root',
})
export class FeeCalculationService {
  feCalcForm: FeeCalcFormDataModel;
  result: ResultModel;

  constructor(private http: HttpClient) { }

  createWrapper(data: NetFeeModel): void {
    this.feCalcForm = new class implements FeeCalcFormDataModel {
      project = 'excelFelol';
      buildConfig = 'default';
      version = 'draft';
      calculation = 'yearlyFee.year';
      params = data;
    };

  }

  calculateFee(data: NetFeeModel): Observable<ResultModel> {
    this.createWrapper(data);
    return this.http.post<ResultModel>(API_URL, this.feCalcForm, httpOptions);
  }

}
