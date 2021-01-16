import { Component, OnInit } from '@angular/core';
import { Illness } from '../models/illness';
import { DataShareService } from '../services/data-share.service';

@Component({
  selector: 'app-select-illness',
  templateUrl: './select-illness.component.html',
  styleUrls: ['./select-illness.component.css']
})
export class SelectIllnessComponent implements OnInit {

  titleSelectIllness = "Select your illness"

  selectedIllness: Illness[] = []

  illnesses: Illness[] = []

  constructor(private dataShareService: DataShareService) { }

  ngOnInit(): void {
    this.getIllnesses()
  }

  setSelectedIllness(event: Event) {
    if (this.selectedIllness.length > 0) {
      this.dataShareService.sendIllness(this.selectedIllness[0])
    }
  }

  getIllnesses() {
    this.dataShareService.getIllnesses().subscribe(result => {
      this.illnesses = result
    })
  }

}
