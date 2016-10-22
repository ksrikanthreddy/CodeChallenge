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
import { MaterialModule } from '@angular/material';
import { CardComponent } from './card.component';
import { CardService } from './card.service';

describe('Component: Card', () => {
beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CardComponent
      ],
      imports: [
      MaterialModule.forRoot()
      ],
      providers:[
      CardService, Http, MockBackend, BaseRequestOptions,
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
  
  it('should create an instance', inject([CardService], (service: CardService) => {
    let component = new CardComponent(service);
    expect(component).toBeTruthy();
  }));
  
  it('should create an instance and call ngOnInit', inject([CardService], (service: CardService) => {
      backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({
    "success": true,
    "cards": [
        {
            "image": "https://deckofcardsapi.com/static/img/KH.png",
            "value": "KING",
            "suit": "HEARTS",
            "code": "KH",
            "images": {"png": "https://deckofcardsapi.com/static/img/KH.png"}
        },
        {
            "image": "https://deckofcardsapi.com/static/img/8C.png",
            "value": "8",
            "suit": "CLUBS",
            "code": "8C",
            "images": {"png": "https://deckofcardsapi.com/static/img/8C.png"}
        }
    ],
    "deck_id":"3p40paa87x90",
    "remaining": 50
})
      });
      connection.mockRespond(new Response(options));
    });
    let component = new CardComponent(service);
    component.ngOnInit();
    expect(component.cards[0].value).toEqual(13);
  }));
  it('should create an instance and call ngOnInit ACE Card response', inject([CardService], (service: CardService) => {
      backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({
    "success": true,
    "cards": [
        {
            "image": "https://deckofcardsapi.com/static/img/AH.png",
            "value": "ACE",
            "suit": "HEARTS",
            "code": "KH",
            "images": {"png": "https://deckofcardsapi.com/static/img/AH.png"}
        },
        {
            "image": "https://deckofcardsapi.com/static/img/8C.png",
            "value": "8",
            "suit": "CLUBS",
            "code": "8C",
            "images": {"png": "https://deckofcardsapi.com/static/img/8C.png"}
        }
    ],
    "deck_id":"3p40paa87x90",
    "remaining": 50
})
      });
      connection.mockRespond(new Response(options));
    });
    let component = new CardComponent(service);
    component.ngOnInit();
    expect(component.cards[0].value).toEqual(14);
    
  }));
  it('should create an instance and call ngOnInit QUEEN Card response', inject([CardService], (service: CardService) => {
      backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({
    "success": true,
    "cards": [
        {
            "image": "https://deckofcardsapi.com/static/img/QH.png",
            "value": "QUEEN",
            "suit": "HEARTS",
            "code": "KH",
            "images": {"png": "https://deckofcardsapi.com/static/img/QH.png"}
        },
        {
            "image": "https://deckofcardsapi.com/static/img/8C.png",
            "value": "8",
            "suit": "CLUBS",
            "code": "8C",
            "images": {"png": "https://deckofcardsapi.com/static/img/8C.png"}
        }
    ],
    "deck_id":"3p40paa87x90",
    "remaining": 50
})
      });
      connection.mockRespond(new Response(options));
    });
    let component = new CardComponent(service);
    component.ngOnInit();
    expect(component.cards[0].value).toEqual(12);
  }));
  it('should create an instance and call ngOnInit JACK Card response', inject([CardService], (service: CardService) => {
      backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({
    "success": true,
    "cards": [
        {
            "image": "https://deckofcardsapi.com/static/img/JH.png",
            "value": "JACK",
            "suit": "HEARTS",
            "code": "JH",
            "images": {"png": "https://deckofcardsapi.com/static/img/JH.png"}
        },
        {
            "image": "https://deckofcardsapi.com/static/img/8C.png",
            "value": "8",
            "suit": "CLUBS",
            "code": "8C",
            "images": {"png": "https://deckofcardsapi.com/static/img/8C.png"}
        }
    ],
    "deck_id":"3p40paa87x90",
    "remaining": 50
})
      });
      connection.mockRespond(new Response(options));
    });
    let component = new CardComponent(service);
    component.ngOnInit();
    expect(component.cards[0].value).toEqual(11);
    
  }));
  it('should create an instance and call Play Method with HIGH and returns failure', inject([CardService], (service: CardService) => {
      backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({
    "success": true,
    "cards": [
        {
            "image": "https://deckofcardsapi.com/static/img/JH.png",
            "value": "JACK",
            "suit": "HEARTS",
            "code": "JH",
            "images": {"png": "https://deckofcardsapi.com/static/img/JH.png"}
        },
        {
            "image": "https://deckofcardsapi.com/static/img/8C.png",
            "value": "8",
            "suit": "CLUBS",
            "code": "8C",
            "images": {"png": "https://deckofcardsapi.com/static/img/8C.png"}
        }
    ],
    "deck_id":"3p40paa87x90",
    "remaining": 50
})
      });
      connection.mockRespond(new Response(options));
    });
    let component = new CardComponent(service);
    component.ngOnInit();
    component.play('HIGH');
    expect(component.showUserCard).toEqual(true);
    expect(component.isSuccess).toEqual(false);
  }));
  it('should create an instance and call Play Method with HIGH and returns success', inject([CardService], (service: CardService) => {
      backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({
    "success": true,
    "cards": [
        {
            "image": "https://deckofcardsapi.com/static/img/JH.png",
            "value": "JACK",
            "suit": "HEARTS",
            "code": "JH",
            "images": {"png": "https://deckofcardsapi.com/static/img/JH.png"}
        },
        {
            "image": "https://deckofcardsapi.com/static/img/8C.png",
            "value": "QUEEN",
            "suit": "CLUBS",
            "code": "QC",
            "images": {"png": "https://deckofcardsapi.com/static/img/8C.png"}
        }
    ],
    "deck_id":"3p40paa87x90",
    "remaining": 50
})
      });
      connection.mockRespond(new Response(options));
    });
    let component = new CardComponent(service);
    component.ngOnInit();
    component.play('HIGH');
    expect(component.showUserCard).toEqual(true);
    expect(component.isSuccess).toEqual(true);
  }));
  it('should create an instance and call Play Method with LOW and returns success', inject([CardService], (service: CardService) => {
      backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({
    "success": true,
    "cards": [
        {
            "image": "https://deckofcardsapi.com/static/img/JH.png",
            "value": "JACK",
            "suit": "HEARTS",
            "code": "JH",
            "images": {"png": "https://deckofcardsapi.com/static/img/JH.png"}
        },
        {
            "image": "https://deckofcardsapi.com/static/img/8C.png",
            "value": "8",
            "suit": "CLUBS",
            "code": "8C",
            "images": {"png": "https://deckofcardsapi.com/static/img/8C.png"}
        }
    ],
    "deck_id":"3p40paa87x90",
    "remaining": 50
})
      });
      connection.mockRespond(new Response(options));
    });
    let component = new CardComponent(service);
    component.ngOnInit();
    component.play('LOW');
    expect(component.showUserCard).toEqual(true);
    expect(component.isSuccess).toEqual(true);
  }));
  it('should create an instance and call Play Method with LOW and returns failure', inject([CardService], (service: CardService) => {
      backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({
    "success": true,
    "cards": [
        {
            "image": "https://deckofcardsapi.com/static/img/JH.png",
            "value": "JACK",
            "suit": "HEARTS",
            "code": "JH",
            "images": {"png": "https://deckofcardsapi.com/static/img/JH.png"}
        },
        {
            "image": "https://deckofcardsapi.com/static/img/8C.png",
            "value": "QUEEN",
            "suit": "CLUBS",
            "code": "QC",
            "images": {"png": "https://deckofcardsapi.com/static/img/8C.png"}
        }
    ],
    "deck_id":"3p40paa87x90",
    "remaining": 50
})
      });
      connection.mockRespond(new Response(options));
    });
    let component = new CardComponent(service);
    component.ngOnInit();
    component.play('LOW');
    expect(component.showUserCard).toEqual(true);
    expect(component.isSuccess).toEqual(false);
  }));
  it('should call logError', inject([CardService], (service: CardService) => {
    let component = new CardComponent(service);
    
    spyOn(console, 'log');
    component.logError('error');
    expect(console.log).toHaveBeenCalled();
  }));
  it('should call tryAgain', inject([CardService], (service: CardService) => {
    let component = new CardComponent(service);
    
    
    component.tryAgain();
    expect(component.deckId).toBeNull();
    expect(component.cards).toBeNull();
    expect(component.dealerCard).toBeNull();
    expect(component.userCard).toBeNull();
    expect(component.message).toBeNull();
    expect(component.isSuccess).toBeNull();
    expect(component.showUserCard).toBeNull();
    expect(component.gameOver).toBeNull();
  }));
});
