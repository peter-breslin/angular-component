import { Observable } from "rxjs/internal/Observable";
import { IOperation } from "./operation-model-interface";

export interface IOperationDataProviderService{
    get() : Observable<IOperation[]>;
}