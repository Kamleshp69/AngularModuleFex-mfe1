import { Component } from '@angular/core';
import { SplitPanel } from '../split-panel/split-panel';

@Component({
  selector: 'app-panel-container',
  templateUrl: './panel-container.component.html',
  styleUrls: ['./panel-container.component.css']
})
export class PanelContainerComponent {


  splitPanels: SplitPanel[] = [
    {
    panel1: {},
    Panel2: {},
    direction: 'horizontal'
    },
    {
      panel1: {},
      Panel2: {},
      direction: 'vertical'
    },
];

}
