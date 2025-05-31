import { Observable } from "rxjs/internal/Observable";
import { IOperation } from "./operation-interface-model";

export interface IOperationDataProviderService{
    get() : Observable<IOperation[]>;
}