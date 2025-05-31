import { Inject, Injectable} from '@angular/core';
import { IOperationDataProviderService } from './operation-data-provider.service.interface';
import { Observable } from 'rxjs';
import { IOperation } from './operation-interface-model';



@Injectable({providedIn: 'root'})
export class OperationDataService {
    constructor(
        @Inject("operationDataProviderService") private operationDataProviderService:IOperationDataProviderService,
    ) { }

     get() : Observable<IOperation[]>{
        return this.operationDataProviderService.get();
     }
}