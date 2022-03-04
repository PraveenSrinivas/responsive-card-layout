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
  columnNames: Array<string>;
  
  constructor(private cardService: CardDataService){
    this.cardData = this.cardService.getFirstNData(5);
    this.columnNames = Object.keys(this.cardData[0]);
  }
}
