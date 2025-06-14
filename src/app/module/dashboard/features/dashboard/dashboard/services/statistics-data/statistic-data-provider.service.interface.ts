import { Observable } from "rxjs/internal/Observable";
import { IStatistic } from "./statistic-model-interface";

export interface IStatisticDataProviderService{
    get() : Observable<IStatistic[]>;
}