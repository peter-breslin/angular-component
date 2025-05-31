import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';
import { OperationItemComponent } from './features/operation-list/operation-item/operation-item.component';
import { OperationListComponent } from './features/operation-list/operation-list.component';

import { MockOperationDataProviderService } from './features/dashboard/dashboard/services/operation-data/mock-operation-data-provider.service';
import { OperationDataService } from './features/dashboard/dashboard/services/operation-data/operation-data.service';

const routes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  declarations: [
    DashboardComponent,
    OperationItemComponent,
    OperationListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers :[ 
     { provide : "operationDataProviderService", useClass: MockOperationDataProviderService}, 
     OperationDataService
  ]
})
export class DashboardModule { }
