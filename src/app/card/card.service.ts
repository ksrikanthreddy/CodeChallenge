import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class CardService {

  constructor(@Inject(Http) private http: Http) { }
  createDeckUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
  drawCardsUrl = 'https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2';
  createDeck() {
    	return this.http.get(this.createDeckUrl)
                    .map(res => res.json())
                    .catch(err => this.handleError(err));;
  	}
  	drawCards(deckId) {
  		let drawCardsURL = (this.drawCardsUrl).replace('<<deck_id>>', deckId);
    	return this.http.get(drawCardsURL)
                    .map(res => res.json())
                    .catch(err => this.handleError(err));;
  	}
  	
  	public handleError(error) {
	    console.error(error);
	    return Observable.throw(error || 'Server error');
    }
}