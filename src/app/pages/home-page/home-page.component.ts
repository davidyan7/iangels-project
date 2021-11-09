import { Component, OnInit } from '@angular/core';
import { StockServiceService } from 'src/app/services/stock-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  stocks: any

  constructor(private stockService: StockServiceService) { }

  async ngOnInit() {
    this.stocks = await this.stockService.getStocks()
  }

  removeStock(symbol: string) {
    this.stocks = this.stockService.removeStock(this.stocks, symbol)
  }

  async addStock(form) {
    const updateStocks = await this.stockService.addStock(form.value.stockSymbol)
    this.stocks = updateStocks
  }
}
