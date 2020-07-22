import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarMainComponent } from './calendar/calendar-main/calendar-main.component';
import { MedicineMainComponent } from './medicine/medicine-main/medicine-main.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientProfileComponent } from './patient/patient-profile/patient-profile.component';


const routes: Routes = [
  { path:'dashboard', component: DashboardComponent},
  { path:'calendar', component: CalendarMainComponent},
  { path:'patient', component: PatientListComponent },
  {path:'patient/profile',component:PatientProfileComponent},
  { path:'medicine', component: MedicineMainComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
