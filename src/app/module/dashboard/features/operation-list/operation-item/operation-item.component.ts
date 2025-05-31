import { AfterViewInit, Component, Input, TemplateRef } from '@angular/core';

import { IOperation } from '../../dashboard/dashboard/services/operation-data/operation-interface-model';

@Component({
  selector: 'app-operation-item',
  standalone:false,
  templateUrl: './operation-item.component.html',
  styleUrl: './operation-item.component.css'
})
export class OperationItemComponent implements AfterViewInit {
  @Input() operation?:IOperation;
  @Input() headerTemplate:TemplateRef<any> | undefined;
  @Input() contentTemplate:TemplateRef<IOperation> | undefined;

  // @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  // @ViewChild('defaultTemplate') defaultTemplate!: TemplateRef<any>;

  ngAfterViewInit(): void {
  //  this.container.createEmbeddedView(this.defaultTemplate);
  }
}

