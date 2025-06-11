import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-operation-detail',
  standalone:false,
  templateUrl: './operation-detail.component.html',
  styleUrl: './operation-detail.component.css'
})
export class OperationDetailComponent {

  //id = signal('');
  id:string = "";

  constructor(private activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe((params) => {
      //this.id.set(params['id']);
      this.id = params['id'];
    });
  }

}
