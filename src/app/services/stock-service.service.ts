import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockServiceService {

  constructor(private httpService: HttpClient) { }



  public async getStocks(): Promise<any>{
    const headers = new HttpHeaders()
    .set('accept','application/json' )
    .set('X-API-KEY','pta0lo1V67awUW4x5ls9l8YSwlsAaS7ra8eTbG3k')
    // .set('X-API-KEY','pta0lo1V67awUW4x5ls9l8YSwlsAaS7ra8eTbG3k')
    const res = (await this.httpService
    .get('https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=GOOGL%2CFB%2CARBE%2CAAPL%2CSPX', { headers,responseType: 'json' })
      .toPromise()) as any
      this.saveToStorage('SAVESTOCKS',res.quoteResponse.result)
      return res.quoteResponse.result
    }

    public removeStock(stocks,symbol){
      const updateStocks = stocks.filter(stock=>stock.symbol !== symbol)
      this.saveToStorage('SAVESTOCKS',updateStocks)
      return updateStocks

    }

    public async addStock(symbol:any): Promise<any>{
      const headers = new HttpHeaders()
    .set('accept','application/json' )
    .set('X-API-KEY','pta0lo1V67awUW4x5ls9l8YSwlsAaS7ra8eTbG3k')
    const res = (await this.httpService
    .get(`https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=${symbol.toUpperCase()}`, { headers,responseType: 'json' })
      .toPromise()) as any
      
      const stocks = this.loadFromStorage('SAVESTOCKS')
      stocks.push(res.quoteResponse.result[0])
      this.saveToStorage('SAVESTOCKS',stocks)
      return stocks

    }


    public saveToStorage(key, value) {
      localStorage.setItem(key, JSON.stringify(value) || null);
    }
    
    public loadFromStorage(key) {
      let data = localStorage.getItem(key);
      return (data) ? JSON.parse(data) : undefined;
    }
}





