import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import contains from '@popperjs/core/lib/dom-utils/contains';
import { NetFeeModel } from '../../models/netFee.model';
import { ResultModel } from '../../models/result.model';
import { InsuranceRepositoryService } from '../../repository/insurance-repository.service';
import { FeeCalculationService } from '../../services/fee-calculation.service';
import { BsDatepickerConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-netto-fee',
  templateUrl: './netto-fee.component.html',
  styleUrls: ['./netto-fee.component.css'],
})
export class NettoFeeComponent implements OnInit {
  feeForm: FormGroup;
  data: NetFeeModel;
  result: ResultModel;
  seqs: any;
  range: number = 3;
  datePickerConfig: Partial<BsDatepickerConfig>;
  maxNumberOfRelatives: number [];
  split: string[];

  constructor(private insuranceRepositoryService: InsuranceRepositoryService, private formBuilder: FormBuilder, private feeCalculationService: FeeCalculationService) {
    this.feeForm = this.formBuilder.group(
      {
        day: [],
        amountOfInsurance: [],
        year: [],
        month: [],
        lengthOfInsurance: [3],
        numberOfInsured: [null],
        chargeFrequency: [null],
      },
    );
    this.maxNumberOfRelatives = this.insuranceRepositoryService.getMaxNumberOfRelatives();
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        dateInputFormat: 'YYYY-MM-DD',
      },
    );
    this.seqs = this.insuranceRepositoryService.getSeq();
  }

  ngOnInit(): void {}

  onSubmit() {
    this.length();
    this.feeForm.value.year = this.split[0];
    this.feeForm.value.month = this.split[1];
    this.feeForm.value.day = this.split[2];
    console.log('ez a form:', this.feeForm.value);
    this.data = {...this.feeForm.value};
    console.log(this.data);
    this.feeCalculationService.calculateFee(this.data).subscribe(
      value => {
        this.result = value;
        console.log(value);
      },
    );
  }

  length() {
    if (this.feeForm.value.lengthOfInsurance) {
      this.range = this.feeForm.value.lengthOfInsurance;
    }
  }

  onValueChange($event: Date) {
    let dateString = $event.toISOString();
    let replace = dateString.replace('T', '-');
    this.split = replace.split('-', 3);

    console.log(this.feeForm.value);
  }
}


