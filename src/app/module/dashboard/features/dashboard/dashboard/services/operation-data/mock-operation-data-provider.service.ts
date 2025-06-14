import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IOperation } from './operation-model-interface';
import * as DS from './mock-operation-data';
import { IOperationDataProviderService} from'./operation-data-provider.service.interface';

@Injectable({providedIn: 'root'})
export class MockOperationDataProviderService implements IOperationDataProviderService {
    constructor() { }

    get() : Observable<IOperation[]>{
        return of(DS.MockOperationData);
    }
}