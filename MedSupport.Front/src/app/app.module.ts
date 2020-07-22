import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CalendarMainComponent } from './calendar/calendar-main/calendar-main.component';
import { PatientMainComponent } from './patient/patient-main/patient-main.component';
import { MedicineMainComponent } from './medicine/medicine-main/medicine-main.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import {MatTableModule} from '@angular/material/table';
import { PatientProfileComponent } from './patient/patient-profile/patient-profile.component';
import { PatientProfileBasicDataComponent } from './patient/patient-profile-basic-data/patient-profile-basic-data.component';
import { PatientProfileOtherDataComponent } from './patient/patient-profile-other-data/patient-profile-other-data.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout'
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import { PatientAddressDataComponent } from './patient/patient-address-data/patient-address-data.component';
import { PatientContactDataComponent } from './patient/patient-contact-data/patient-contact-data.component';
import { PatientVisitDataComponent } from './patient/patient-visit-data/patient-visit-data.component';
import { PatientMedicineDataComponent } from './patient/patient-medicine-data/patient-medicine-data.component';
import { PatientVisitDataDialogComponent } from './patient/patient-visit-data-dialog/patient-visit-data-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    CalendarMainComponent,
    PatientMainComponent,
    MedicineMainComponent,
    PatientListComponent,
    PatientProfileComponent,
    PatientProfileBasicDataComponent,
    PatientProfileOtherDataComponent,
    PatientAddressDataComponent,
    PatientContactDataComponent,
    PatientVisitDataComponent,
    PatientMedicineDataComponent,
    PatientVisitDataDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    LayoutModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatDialogModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
