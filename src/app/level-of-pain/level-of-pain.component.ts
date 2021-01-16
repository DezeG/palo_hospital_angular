import { Component, OnInit } from '@angular/core';
import { LevelPain } from '../models/levelPain';
import { DataShareService } from '../services/data-share.service';

@Component({
  selector: 'app-level-of-pain',
  templateUrl: './level-of-pain.component.html',
  styleUrls: ['./level-of-pain.component.css']
})
export class LevelOfPainComponent implements OnInit {

  titleSelectLevelOfPain = "Select your level of pain"

  levelsOfPain: LevelPain[] = [
    {
      level: 0,
      emotion: "sentiment_very_satisfied"
    },
    {
      level: 1,
      emotion: "sentiment_satisfied"
    },
    {
      level: 2,
      emotion: "face"
    },
    {
      level: 3,
      emotion: "sentiment_dissatisfied"
    },
    {
      level: 4,
      emotion: "sentiment_very_dissatisfied"
    }
  ]

  selectedLevelOfPain = this.levelsOfPain[2]

  constructor(private dataShareService: DataShareService) { }

  ngOnInit(): void {
    this.dataShareService.sendLevelOfPain(this.selectedLevelOfPain)
    this.getLevelOfPain()
  }

  getLevelOfPain() {
    this.dataShareService.getLevelOfPain().subscribe(result => {
      this.selectedLevelOfPain = result
    })
  }

  setLevelOfPain(event: Event) {
    this.dataShareService.sendLevelOfPain(this.selectedLevelOfPain)
  }

}
