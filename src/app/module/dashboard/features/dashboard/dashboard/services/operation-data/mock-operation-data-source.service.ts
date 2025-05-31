import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IOperation } from './operation-interface-model';
import * as DS from './mock-operation-data';
import { IOperationDataSourceService} from'./operation-data-source.service.interface';

@Injectable({providedIn: 'root'})
export class MockOperationDataSourceService implements IOperationDataSourceService {
    constructor() { }

    get() : Observable<IOperation[]>{
        return of(DS.MockOperationData);
    }
}