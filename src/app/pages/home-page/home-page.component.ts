import { Component, OnInit } from '@angular/core';
import { StockServiceService } from 'src/app/services/stock-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  stocks:any
  
  constructor(private stockService:StockServiceService) { }

  async ngOnInit() {
    console.log(this.stockService.loadFromStorage('SAVESTOCKS'));
    
    this.stocks  = await this.stockService.getStocks()
    // this.stocks =this.stockService.loadFromStorage('SAVESTOCKS')
  }

  removeStock(symbol:string){
    console.log("HomePageComponent ~ symbol", symbol)
    this.stocks = this.stockService.removeStock(this.stocks,symbol)
  }

  async addStock(form){
    console.log('ssss',form.value.stockSymbol);
    const updateStocks = await this.stockService.addStock(form.value.stockSymbol)
    this.stocks = updateStocks

  }



}
