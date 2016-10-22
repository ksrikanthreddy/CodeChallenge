/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import {
  ResponseOptions,
  Response,
  Http,
  BaseRequestOptions,
  RequestOptions,
  RequestMethod,
  ConnectionBackend
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { CardService } from './card.service';

describe('Service: Card', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardService, Http, MockBackend, BaseRequestOptions,
    {
      provide: Http,
      useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
        return new Http(backendInstance, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    }
    ]
    });
  });
let subject: CardService = null;
  let backend: MockBackend = null;
  beforeEach(inject([CardService, MockBackend], (cardService: CardService, mockBackend: MockBackend) => {
    subject = cardService;
    backend = mockBackend;
  }));

  it('should ...', inject([CardService], (service: CardService) => {
    expect(service).toBeTruthy();
  }));
  
  it('service should call createDeck endpoint and return it\'s result', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({ success: true })
      });
      connection.mockRespond(new Response(options));
    });

    subject
      .createDeck()
      .subscribe((response) => {
        expect(response).toEqual({ success: true });
        done();
      });
  });
  it('service should call drawCards endpoint and return it\'s result', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({ success: true })
      });
      connection.mockRespond(new Response(options));
    });

    subject
      .drawCards(1)
      .subscribe((response) => {
        expect(response).toEqual({ success: true });
        done();
      });
  });
});
