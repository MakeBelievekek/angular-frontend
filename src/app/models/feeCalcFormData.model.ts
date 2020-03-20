import { NetFeeModel } from './netFee.model';

export interface FeeCalcFormDataModel {
  project: string;
  buildConfig: string;
  version: string;
  calculation: string;
  params: NetFeeModel;
}
