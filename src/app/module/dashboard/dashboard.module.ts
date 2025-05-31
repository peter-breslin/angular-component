import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';
import { OperationListComponent } from './features/operation-list/operation-list.component';

import { MockOperationDataSourceService } from './features/dashboard/dashboard/services/operation-data/mock-operation-data-source.service';

const routes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  declarations: [
    DashboardComponent,
    OperationListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers :[
    { provide: "operationDataSourceService", useClass: MockOperationDataSourceService}
  ]
})
export class DashboardModule { }
