import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [
    CardService
  ]
})
export class CardComponent implements OnInit {
  deckId;
  cards;
  dealerCard;
  userCard;
  message;
  isSuccess;
  showUserCard;
  gameOver;
  constructor(private cardService: CardService) { }
  createDeck(){
    this.cardService.createDeck()
    	.subscribe(res => this.deckDetails(res),
	   			err  => this.logError(err));
  }
  deckDetails(res){
  	this.deckId = res.deck_id;
  	this.drawCards(this.deckId);
  }
  drawCards(deckId){
  	this.cardService.drawCards(deckId)
    	.subscribe(res => this.drawnCards(res),
	   			err  => this.logError(err));
  }
  drawnCards(res){
  	this.cards = res.cards;
  	this.compareCards(this.cards);
  	this.dealerCard = this.cards[0].images.png;
  	this.userCard = this.cards[1].images.png;
  }
  compareCards(cards){
  	let card1Value = this.getValue(cards[0].value);
  	let card2Value = this.getValue(cards[1].value);
  	if(card1Value === card2Value){
  		this.drawCards(this.deckId);
  	}
  	else{
  		this.cards[0].value = card1Value;
  		this.cards[1].value = card2Value;
  	}
  }
  
  play(type){
  	this.showUserCard = true;
    let wonGame = this.check(type);
    if(wonGame){
    	this.isSuccess = true;
    	this.message = "You Win!";
    }
    else{
    	this.isSuccess = false;
    	this.message = "Better Luck Next Time";
    }
    this.gameOver = true;
  }
  check(type){
  	let dealerVal = this.cards[0].value;
    let userVal = this.cards[1].value;
  	if(type == "HIGH"){
  		if(dealerVal < userVal){
  			return true;
  		}
  		return false;
  	}
  	if(type == "LOW"){
  		if(dealerVal > userVal){
  			return true;
  		}
  		return false;
  	}
  }
  getValue(cardValue){
  	let actualValue = cardValue;
  	let parsedValue = isNaN(cardValue);
  	if(parsedValue){
  		if(cardValue == "KING"){
  			actualValue = 13;
  		}
  		if(cardValue == "ACE")
        {
        	actualValue = 14;
        }
        if(cardValue == "QUEEN")
        {
        	actualValue = 12;
        }
        if(cardValue == "JACK")
        {
        	actualValue = 11;
        }
  	}
  	else{
  		actualValue = parseInt(cardValue);
  	}
  	return actualValue;
  }
  logError(err){
  	console.log(err);
  }
  tryAgain(){
  this.deckId = null;
  this.cards = null;
  this.dealerCard = null;
  this.userCard = null;
  this.message = null;
  this.isSuccess = null;
  this.showUserCard = null;
  this.gameOver = null;
  	this.ngOnInit();
  }
  ngOnInit() {
  this.createDeck();
  }

}
