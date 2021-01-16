import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Illness } from '../models/illness';
import { LevelPain } from '../models/levelPain';
import { UserInfo } from '../models/userInfo';
import { SelectedHospital } from '../models/selectedHospital';
import { DataShareService } from '../services/data-share.service';
import { SendDataService } from '../services/send-data.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  name = new FormControl('', [Validators.required, Validators.nullValidator]);

  titleUserInfo = "Enter your information"

  selectedHospital: string | undefined
  selectedIllness: string | undefined
  selectedPainLevel: LevelPain | undefined

  buttonEnabled: boolean = false

  constructor(
    private dataShareService: DataShareService,
    private sendDataService: SendDataService
  ) { }

  ngOnInit(): void {
    this.getOpenSubmitForm()
  }

  onClick() {
    if (this.selectedHospital && this.selectedIllness && this.selectedPainLevel) {
      let userInfo: UserInfo = {
        name: this.name.value,
        hospital: this.selectedHospital,
        illness: this.selectedIllness,
        painLevel: this.selectedPainLevel?.level
      }
      this.sendDataService.sendUserInfo(userInfo).subscribe(result => {
        window.alert("Success")
      })
    }
  }

  getOpenSubmitForm() {
    this.dataShareService.getOpenSubmitForm().subscribe(result => {
      if (result) {
        this.getSelectedHospital()
        this.getSelectedIllness()
        this.getPainLevel()
      }
    })
  }

  getErrorMessage() {
    if (this.name!.hasError('required')) {
      return 'You must enter a value';
    }
    return null
  }

  getSelectedIllness() {
    this.dataShareService.getIllness().subscribe(result => {
      this.selectedIllness = result.toString()
    })
  }

  getSelectedHospital() {
    this.dataShareService.getSelectedHospital().subscribe(result => {
      this.selectedHospital = result.toString()
    })
  }

  getPainLevel() {
    this.dataShareService.getLevelOfPain().subscribe(result => {
      this.selectedPainLevel = result
    })
  }

}
