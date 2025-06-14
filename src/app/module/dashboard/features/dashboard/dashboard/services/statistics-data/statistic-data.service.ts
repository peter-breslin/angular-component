import { Inject, Injectable} from '@angular/core';
import { IStatisticDataProviderService } from './statistic-data-provider.service.interface';
import { Observable } from 'rxjs';
import {IStatistic} from './statistic-model-interface';



@Injectable({providedIn: 'root'})
export class StatisticDataService {
    constructor(
        @Inject("statisticDataProviderService") private statisticDataProviderService:IStatisticDataProviderService,
    ) { }

     get() : Observable<IStatistic[]>{
        return this.statisticDataProviderService.get();
     }
}