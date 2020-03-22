import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeeCalcFormDataModel } from '../models/feeCalcFormData.model';
import { NetFeeModel } from '../models/netFee.model';
import { ResultModel } from '../models/result.model';

const API_URL = 'https://formulative.io/api/calculate';
const API_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1qVkZNRVJETURkR1FqWXdOVVV6T0RJME1EVkZOakkxTlVGQ1F6QTVRa1EyTXpJeU56WkVNZyJ9.eyJpc3MiOiJodHRwczovL2Zvcm11bGF0aXZlLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZTZmOTJjNjgwMGI0MjBjNDFkMDYzNzEiLCJhdWQiOlsiZm9ybXVsYXRpdmUtd2ViLWFwaSIsImh0dHBzOi8vZm9ybXVsYXRpdmUuZXUuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTU4NDg4OTA5MSwiZXhwIjoxNTg0ODk2MjkxLCJhenAiOiJKUmZFcHlCU2hNOVcxUHBOMm0yNTd0U01kSnY5SGlBcyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUifQ.IuJJBpoZk0ystEhCVdLGBwvBsfC2UdWdwp_moaBWiIcVG2YB_4oABlDvfZSFnGBdO1dB1-iksyXaEGMI9DhgIfbZqBBe9vuOcV1F6i5ImuWQyF8ZCAzU3ByNaoAikKZhuWIK8tmTqlI0AntlS9eoS2AmUZnGQYJYUlZgPtMY_QOOchkp2Mc6_4FzPX2D12RhQsiWbp2JuoCSt0QRC-ayjm6T5nUSwy_vMFY-diKagol1N__sYkAHAEBfLDF6N_VBwG-RKIeJFKlWR5oCNnwTvSYUQ1Ri_yiAe_LRrdqkPVY1heSErcd7sr7-whrvxZZJxkPIKYfKdiA6W4FwrAtc4Q';

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
