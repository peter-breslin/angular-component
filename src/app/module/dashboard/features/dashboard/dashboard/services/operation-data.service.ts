import { Inject, Injectable} from '@angular/core';
import { IOperationDataSourceService } from './operation-data-source.service.interface';
import { Observable } from 'rxjs';
import { IOperation } from './operation-interface-model';



@Injectable({providedIn: 'root'})
export class OperationDataService {
    constructor(
        @Inject("operationDataSourceService") private operationDataSourceService:IOperationDataSourceService,
    ) { }

     get() : Observable<IOperation[]>{
        return this.operationDataSourceService.get();
     }
}