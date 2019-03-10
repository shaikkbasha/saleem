import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ConnectivityComponent } from './connectivity/connectivity.component';
import { FlightsComponent } from './flights/flights.component';
import { ArtefactModule } from '../../shared/artefact.module';

const routes: Routes = [

  {
    path: '',
    component: FlightsComponent,
    children: [
      { path: '', redirectTo: 'connectivity', pathMatch: 'full'},
      { path: 'connectivity', component: ConnectivityComponent}
    ]
  }
];

@NgModule({
  declarations: [
    ConnectivityComponent,
    FlightsComponent
  ],
  imports: [
    CommonModule,
    ArtefactModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    ArtefactModule
  ]
})
export class FlightModule { }
