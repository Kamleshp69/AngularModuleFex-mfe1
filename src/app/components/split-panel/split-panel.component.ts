import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { SplitPanel } from './split-panel';

@Component({
  selector: 'app-split-panel',
  templateUrl: './split-panel.component.html',
  styleUrls: ['./split-panel.component.css']
})
export class SplitPanelComponent implements OnInit {

  panelStyle!: {};

  ngOnInit(): void {
    this.panelStyle = {

    }
  }
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.


  private panel!: SplitPanel;

  @Input()
  set Panel(panel: SplitPanel) {
    this.panel = panel;
  }
  get Panel(): SplitPanel {
    return this.panel;
  }

  Direction: string = 'vertical';

  private isMoving = false;
  private initialState = {
    mouseOffsetX: 0,
    mouseOffsetY: 0,
    panel1Height: 0,
    panel2Height: 0,
    panel1Width: 0,
    panel2Width: 0
  };

  directionClass = "vertical";
  @ViewChild('panel1') panel1: any;
  @ViewChild('panel2') panel2: any;
  onMousedown(event: MouseEvent): void {
    this.isMoving = true;
    this.initialState = {
      mouseOffsetX: event.clientX,
      mouseOffsetY: event.clientY,

      panel1Height: this.panel1.nativeElement.offsetHeight,
      panel1Width: this.panel1.nativeElement.offsetWidth,

      panel2Height: this.panel2.offsetHeight,
      panel2Width: this.panel2.offsetWidth
    }
    console.log('initialState', JSON.stringify(this.initialState));
    document.addEventListener('mousemove', this.onMousemove);
    document.addEventListener('mouseup', this.onMouseup);
  }

  onMouseup = () => {
    this.isMoving = false;
    // this.isResizing = false;
    console.log('onMouseup');
    document.removeEventListener('mousemove', this.onMousemove);
    document.removeEventListener('mouseup', this.onMouseup);
  }

 onMousemove = (event: MouseEvent) => {
    if (this.isMoving) {
      // this.elementRef.nativeElement.style.left = (event.clientX - this.mouseOffsetX) + 'px';
      // this.elementRef.nativeElement.style.top = (event.clientY - this.mouseOffsetY) + 'px';
      if (this.panel.direction === 'vertical') {
        const currentY = event.clientY;
        // console.log(`clientX: ${event.clientX}, clientY: ${event.clientY}, ${event.offsetY}`);
        const diff = (currentY - this.initialState.mouseOffsetY);
        console.log('diff', diff);
        const p1NewHeight = this.initialState.panel1Height + diff;
        const p2NewHeight = this.initialState.panel2Height - diff;

        // console.log(`initialState: ${this.initialState.panel1Height}, panel2Height: ${this.initialState.panel2Height}`);
        this.panel1.nativeElement.style.height = p1NewHeight + 'px';
        this.panel2.nativeElement.style.height = p2NewHeight + 'px';
      } else {
        const currentX = event.clientX;
        const diff = (currentX - this.initialState.mouseOffsetX);
        const p1NewWidth = this.initialState.panel1Width + diff;
        const p2NewWidth = this.initialState.panel2Width - diff;
        this.panel1.nativeElement.style.width = p1NewWidth + 'px';
        this.panel2.nativeElement.style.width = p2NewWidth + 'px';
      }
    }

    // if (this.isResizing) {
    //   if (this.initialWidth && this.initialHeight) {
    //     const newW = this.initialWidth + (event.clientX - this.mouseOffsetX);
    //     const newH = this.initialHeight + (event.clientY - this.mouseOffsetY);
    //      this.elementRef.nativeElement.style.width = newW + 'px';
    //      this.elementRef.nativeElement.style.height = newH + 'px';
    //   }
    // }
  }

}
