import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStatistic } from '../../dashboard/dashboard/services/statistics-data/statistic-model-interface';
import { ReplaySubject, takeUntil } from 'rxjs';
import { StatisticDataService } from '../../dashboard/dashboard/services/statistics-data/statistic-data.service';

@Component({
  selector: 'app-operation-detail',
  standalone:false,
  templateUrl: './operation-detail.component.html',
  styleUrl: './operation-detail.component.css'
})
export class OperationDetailComponent {

  id:string = "";

  data:IStatistic[]=[];
  destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  operationDataService = inject(StatisticDataService)

  constructor(private activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.setDataSource();
  }

    setDataSource() : void {
      this.operationDataService.get()
      .pipe(takeUntil(this.destroyed$))
      .subscribe({ next: async (o) => {
        this.data = o;
      },
      error: (err) => {
        this.onError()
      },
      complete: () => {
        this.onComplete();
      }});
    }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  onComplete() : void {}

  onError() : void {}
}
