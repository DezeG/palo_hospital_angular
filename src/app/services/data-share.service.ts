import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'; 
import { Hospital } from '../models/hospital';
import { Illness } from '../models/illness';
import { IllnessLinks } from '../models/illnessLinks';
import { LevelPain } from '../models/levelPain';
import { SelectedHospital } from '../models/selectedHospital';
import { WaitingList } from '../models/waitingList';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  hospitalsValue: Hospital[] = []
  illnessesValue: Illness[] = []
  levelOfPainValue: LevelPain = {level: 0, emotion: ""}
  illnessValue: Illness = {name: "", id: "0"}
  waitingListValue: WaitingList[] = [{patientCount: 0, averageProcessTime: 0, levelOfPain: 0}]
  hospitalValue: SelectedHospital = {name: "", waitTime: 0}

  private hospitals = new BehaviorSubject(this.hospitalsValue)
  private illnesses = new BehaviorSubject(this.illnessesValue)
  private levelOfPain = new BehaviorSubject(this.levelOfPainValue)
  private selectedIllness = new BehaviorSubject(this.illnessValue)
  private selectedHospital = new BehaviorSubject(this.hospitalValue)
  private openSubmitForm = new BehaviorSubject(false)
  sharedHospitals = this.hospitals.asObservable();
  sharedIllnesses = this.illnesses.asObservable();
  sharedLevelOfPain = this.levelOfPain.asObservable();
  sharedSelectedIllness = this.selectedIllness.asObservable();
  sharedSelectedHospital = this.selectedHospital.asObservable();
  sharedOpenSubmitForm = this.openSubmitForm.asObservable();

  constructor() { }

  sendHospitals(hospitals: Hospital[]) {
    return this.hospitals.next(hospitals);
  }

  getHospitals(): Observable<Hospital[]> {
    return this.sharedHospitals;
  }

  sendIllnesses(illnesses: Illness[]) {
    return this.illnesses.next(illnesses);
  }

  getIllnesses(): Observable<Illness[]> {
    return this.sharedIllnesses;
  }

  sendIllness(illness: Illness) {
    return this.selectedIllness.next(illness);
  }

  getIllness(): Observable<Illness> {
    return this.sharedSelectedIllness;
  }

  sendLevelOfPain(levelOfPain: LevelPain) {
    return this.levelOfPain.next(levelOfPain);
  }

  getLevelOfPain(): Observable<LevelPain> {
    return this.sharedLevelOfPain;
  }

  sendSelectedHospital(hospital: SelectedHospital) {
    return this.selectedHospital.next(hospital);
  }

  getSelectedHospital(): Observable<SelectedHospital> {
    return this.sharedSelectedHospital;
  }

  sendOpenSubmitForm(value: boolean) {
    return this.openSubmitForm.next(value);
  }

  getOpenSubmitForm(): Observable<boolean> {
    return this.sharedOpenSubmitForm;
  }

}
