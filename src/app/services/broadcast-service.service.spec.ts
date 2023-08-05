import { TestBed } from '@angular/core/testing';

import { BroadcastService } from './broadcast.service';

import { BroadcastMessage } from '@core/interfaces/broadcast-message';

import config from '@core/constants/config.json';

describe('BroadcastService', () => {
  let service: BroadcastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BroadcastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.broadcastChannel.name).toEqual(config.details.detailChangeChannel);
  });

  it('expects "publish" to trigger a postMessage', () => {
    const message: BroadcastMessage = { type: 'TEST', payload: 'DATA' };
    spyOn(service.broadcastChannel, 'postMessage').and.stub();
    service.publish(message);
    expect(service.broadcastChannel.postMessage).toHaveBeenCalledWith(message);
  });

  it('expects "messagesOfType" to capture and return message if type matches', (done) => {
    const type: string = 'TEST';
    const message: BroadcastMessage = { type: type, payload: 'DATA' };
    let expected: BroadcastMessage = Object.assign({}, message);
    service.messagesOfType(type).subscribe(result => {
      expect(result).toEqual(expected);
      done();
    });
    service.onMessage.next(message);
  });
});
