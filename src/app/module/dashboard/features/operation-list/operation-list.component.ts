import { Component, Inject, OnDestroy, OnInit, inject } from '@angular/core';

import { IOperation } from '../dashboard/dashboard/services/operation-data/operation-interface-model';
import {OperationDataService} from '../dashboard/dashboard/services/operation-data/operation-data.service';
import { ReplaySubject, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-operation-list',
  standalone:false,
  templateUrl: './operation-list.component.html',
  styleUrl: './operation-list.component.css'
})
export class OperationListComponent implements  OnInit, OnDestroy{

  dataSource:IOperation[]=[];
  destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  operationDataService = inject(OperationDataService)

  ngOnInit(): void {
    this.setDataSource();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  onComplete() : void {}

  onError() : void {}

  private setDataSource() : void {
    this.operationDataService.get()
    .pipe(takeUntil(this.destroyed$))
    .subscribe({ next: async (o) => {
      this.dataSource = o;
    },
    error: (err) => {
      this.onError()
    },
    complete: () => {
      this.onComplete();
    }});
  }
}
