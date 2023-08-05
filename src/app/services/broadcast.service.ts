import { Injectable, NgZone } from '@angular/core';
import { Observable, OperatorFunction, Subject } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
export interface BroadcastMessage {
  type: string,
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {
  //kp:notes: https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API
  // https://www.acagroup.be/en/blog/how-to-use-the-broadcastchannel-api-angular/
  private broadcastChanel!: BroadcastChannel;
  private onMessageReceived = new Subject<any>();


  constructor(private ngZone: NgZone) {
    this.initialise();
  }

  initialise(): void {
    const channelName = environment.broadcastChannelName;
    this.broadcastChanel = new BroadcastChannel(channelName);
    this.broadcastChanel.onmessage = (message: MessageEvent) => {
      //console.log('Broadcast message Received', message);
      this.onMessageReceived.next(message.data);
    };
  }
  publish(message: BroadcastMessage): void {
    console.log('Broadcast message', message);
    this.broadcastChanel.postMessage(message);
  }

  messageOfType(type: string): Observable<BroadcastMessage> {
    return this.onMessageReceived.pipe(
      tap(m => console.log('xxxx', m)),
      this.runInZone(this.ngZone),
      filter(message => message.type === type)
    );
  }

  messageOfAllTypes(): Observable<BroadcastMessage> {
    return this.onMessageReceived.pipe(
      this.runInZone(this.ngZone)
    );
  }

  /**
 * Custom OperatorFunction that makes sure that all lifecycle hooks of an Observable
 * are run in the NgZone.
 */
 runInZone<T>(zone: NgZone): OperatorFunction<T, T> {
  return (source: any) => {
    return new Observable(observer => {
      const onNext = (value: T) => zone.run(() => observer.next(value));
      const onError = (e: any) => zone.run(() => observer.error(e));
      const onComplete = () => zone.run(() => observer.complete());
      return source.subscribe(onNext, onError, onComplete);
    });
  };
}
}
