import { Injectable } from '@angular/core';
import * as originalCardData from "./cardData";

@Injectable({
  providedIn: 'root'
})
export class CardDataService {
  cardsData: any;

  constructor() { 
    this.cardsData = originalCardData.CardData;
  }

  getCardData(){
    return this.cardsData;
  }

  getFirstNData(n:number){
    return this.cardsData.slice(0,n);
  }
}
