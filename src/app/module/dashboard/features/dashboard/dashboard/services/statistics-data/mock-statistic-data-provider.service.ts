import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IStatistic } from './statistic-model-interface';
import * as DS from './mock-statistic-data';
import { IStatisticDataProviderService} from'./statistic-data-provider.service.interface';

@Injectable({providedIn: 'root'})
export class MockStatisticDataProviderService implements IStatisticDataProviderService {
    constructor() { }

    get() : Observable<IStatistic[]>{
        return of(DS.MockData);
    }
}