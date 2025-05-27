import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IOperation } from './operation-interface-model';
import * as DS from './mock-operation-data';

@Injectable({providedIn: 'root'})
export class MockOperationDataSourceService {
    constructor() { }

    get() : Observable<IOperation[]>{
        return of(DS.MockOperationData);
    }
}