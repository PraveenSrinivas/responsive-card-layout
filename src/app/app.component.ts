import { Component } from '@angular/core';
import { CardDataService } from './services/card-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-kodo-app';
  cardData : Array<any>;
  
  constructor(private cardService: CardDataService){
    this.cardData = this.cardService.getCardData();
  }
}
