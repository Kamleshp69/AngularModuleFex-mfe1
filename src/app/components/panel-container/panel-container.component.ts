import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { SplitPanel } from '../split-panel/split-panel';
import { BroadcastService, BroadcastMessage } from 'src/app/services/broadcast.service';

@Component({
  selector: 'app-panel-container',
  templateUrl: './panel-container.component.html',
  styleUrls: ['./panel-container.component.css']
})
export class PanelContainerComponent implements OnInit {
  userText!: string;
  userTextReceived!: string;

  //private bc = new BroadcastChannel("test_channel");
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

  constructor(private broadcasrService: BroadcastService) {}
  ngOnInit(): void {
    this.onSubscribe();
    this.initBroacastChannel();
  }
  onClickSendMessage(): void {
    console.log('sending', this.userText);
    const message = new CustomEvent("kp.testApp.textUpdated", {detail: this.userText});
    window.dispatchEvent(message);

    this.broadcasrService.publish({type: 'panel-updated', data: this.userText});
  }

  onSubscribe(): void {
    const eventName = 'kp.testApp.textUpdated';
    console.log('Received', this.userText);
    window.addEventListener(eventName, event => {
      const data = event as CustomEvent;
      this.userTextReceived =  data.detail;
    });
  }

  initBroacastChannel(): void {
    this.broadcasrService.messageOfType('panel-updated').subscribe(m => {
          this.userTextReceived = m.data;
          console.log('this.userTextReceived', this.userTextReceived);
    });
    // this.bc.onmessage = (message: MessageEvent) => {
    //   console.log('Received', message);
    //   // Code that runs inside the Angular Zone will automatically trigger the change detection
    //   this._ngZone.run(() => this.userTextReceived = message.data);

    //   console.log('this.userTextReceived', this.userTextReceived);
    // };
  }



}
