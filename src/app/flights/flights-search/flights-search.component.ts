import { loadRemoteModule } from '@angular-architects/module-federation';
import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit} from '@angular/core';


@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent {

  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;

  constructor() { }

  search() {
    alert('Not implemented for this demo!');
  }

  async terms() {
  //   const comp = await loadRemoteModule('../lazy/lazy.component').then(m => m.LazyComponent);

  //   const factory = this.cfr.resolveComponentFactory(comp);
  //   this.viewContainer.createComponent(factory, undefined, this.injector);
   }


}