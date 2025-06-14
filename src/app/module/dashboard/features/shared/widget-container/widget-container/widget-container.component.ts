import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-widget-container',
  standalone:false,
  templateUrl: './widget-container.component.html',
  styleUrl: './widget-container.component.css'
})
export class WidgetContainerComponent {

  @Input() title:string="";
  @Input() contentTemplate:TemplateRef<any> | undefined;

}
