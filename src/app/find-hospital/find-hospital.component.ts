import { Component, OnInit } from '@angular/core';
import { Hospital } from '../models/hospital';
import { Illness } from '../models/illness';
import { IllnessLinks } from '../models/illnessLinks';
import { DataShareService } from '../services/data-share.service';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-find-hospital',
  templateUrl: './find-hospital.component.html',
  styleUrls: ['./find-hospital.component.css']
})
export class FindHospitalComponent implements OnInit {

  hospitals: Hospital[] = []
  illnesses: IllnessLinks[] = []

  openSubmitForm: Boolean = false
  
  selectedIllness: string | undefined

  pageHospital: number = 0
  pageIllness: number = 0

  constructor(
    private getDataService: GetDataService,
    private dataShareService: DataShareService
    ) { 
  }

  ngOnInit(): void {
    this.getHospitals(this.pageHospital);
    this.getIllness(this.pageIllness);
    this.listenToOpenSubmitForm()
  }

  getHospitals(page: number) {
    this.getDataService.getHospitals(page).subscribe(result => {
      this.hospitals.push(...result._embedded.hospitals);
      if (result.page.number < result.page.totalPages) {
        this.pageHospital += 1;
        this.getHospitals(this.pageHospital);
      } else {
        this.dataShareService.sendHospitals(this.hospitals);
      }
    })
  }

  getIllness(page: number) {
    this.getDataService.getIllness(page).subscribe(result => {
      this.illnesses.push(...result._embedded.illnesses);
      if (result.page.number < result.page.totalPages) {
        this.pageIllness += 1;
        this.getIllness(this.pageIllness);
      } else {
        let illnesses: Illness[] = this.illnesses.map(value => value.illness);
        this.dataShareService.sendIllnesses(illnesses);
      }
    })
  }

  listenToOpenSubmitForm() {
    this.dataShareService.getOpenSubmitForm().subscribe(result => {
      this.openSubmitForm = result;
    })
  }

}
