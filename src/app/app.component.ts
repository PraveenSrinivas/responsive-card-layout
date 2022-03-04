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
  size = 1;
  
  constructor(private cardService: CardDataService){
    this.cardData = this.cardService.getFirstNData(this.size);
    this.columnNames = Object.keys(this.cardData[0]);
  }

  loadData(){
    this.cardData = this.cardService.getFirstNData(this.size);
  }
}
