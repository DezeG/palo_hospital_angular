import { Component, OnInit } from '@angular/core';
import { Hospital } from '../models/hospital';
import { Illness } from '../models/illness';
import { LevelPain } from '../models/levelPain';
import { SelectedHospital } from '../models/selectedHospital';
import { DataShareService } from '../services/data-share.service';

@Component({
  selector: 'app-selected-hospitals',
  templateUrl: './selected-hospitals.component.html',
  styleUrls: ['./selected-hospitals.component.css']
})
export class SelectedHospitalsComponent implements OnInit {

  titleSelectedHospitals = "Selected hospitals"

  hospitals: Hospital[] = []
  selectedHospitals: SelectedHospital[] = []
  selectedHospital: SelectedHospital[] = []
  levelOfPain: LevelPain | undefined
  illness: Illness | undefined

  constructor(private dataShareService: DataShareService) { }

  ngOnInit(): void {
    this.getHospitals()
    this.getLevelOfPain()
    this.getIllness()
  }

  getLevelOfPain() {
    this.dataShareService.getLevelOfPain().subscribe(result => {
      this.levelOfPain = result
      this.onUpdated()
    })
  }

  getIllness() {
    this.dataShareService.getIllness().subscribe(result => {
      this.illness = result
      this.onUpdated()
    })
  }

  getHospitals() {
    this.dataShareService.getHospitals().subscribe(result => {
      this.hospitals = result
    })
  }

  setSelectedHospital(event: Event) {
    if (this.selectedHospital.length > 0) {
      this.dataShareService.sendSelectedHospital(this.selectedHospital[0])
      this.dataShareService.sendOpenSubmitForm(true)
    }
  }

  onUpdated() {
    this.selectedHospitals = []
    let listOfHospitals: SelectedHospital[] = []
    if (this.illness?.name != "") {
      this.hospitals.forEach(hospital => {
        let time = hospital.waitingList[this.levelOfPain!!.level].averageProcessTime * hospital.waitingList[this.levelOfPain!!.level].patientCount
        let selectedHospital: SelectedHospital = {name: hospital.name, waitTime: time}
        listOfHospitals.push(selectedHospital)
      })
      this.selectedHospitals = listOfHospitals.sort( (a,b) => a.waitTime - b.waitTime).slice(0, 5)
    }
  }

}
