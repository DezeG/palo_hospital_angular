import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindHospitalComponent } from './find-hospital/find-hospital.component';
import { GetDataService } from './services/get-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LevelOfPainComponent } from './level-of-pain/level-of-pain.component';
import { SelectIllnessComponent } from './select-illness/select-illness.component';
import { SelectedHospitalsComponent } from './selected-hospitals/selected-hospitals.component';
import { DataShareService } from './services/data-share.service';
import { UserInfoComponent } from './user-info/user-info.component';
import { SendDataService } from './services/send-data.service';

@NgModule({
  declarations: [
    AppComponent,
    FindHospitalComponent,
    ToolbarComponent,
    LevelOfPainComponent,
    SelectIllnessComponent,
    SelectedHospitalsComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatRadioModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [GetDataService, DataShareService, SendDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
