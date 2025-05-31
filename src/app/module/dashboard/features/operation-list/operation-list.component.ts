import { Component, Inject, OnDestroy, OnInit } from '@angular/core';

import { IOperation } from '../dashboard/dashboard/services/operation-data/operation-interface-model';
import {OperationDataService} from '../dashboard/dashboard/services/operation-data/operation-data.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-operation-list',
  standalone:false,
  templateUrl: './operation-list.component.html',
  styleUrl: './operation-list.component.css'
})
export class OperationListComponent implements  OnInit, OnDestroy{

  objectList:IOperation[]=[];
  ngUnsubscribe = new Subject<IOperation[]>();
  

  constructor(private operationDataService:OperationDataService){}
  
  ngOnInit(): void {
    
    this.operationDataService.get()
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe({ next: async (o) => {

      this.objectList = o;
    },
    error: (err) => {
      this.onError()
    },
    complete: () => {
      this.onComplete();
    }});
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.complete();
  }

  onComplete() : void {}

  onError() : void {}
}
