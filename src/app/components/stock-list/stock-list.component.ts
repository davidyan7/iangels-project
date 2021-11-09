import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {

@Input() stocks:any
@Output() selectStock = new EventEmitter()

  headers:any[] =  ['Company Name','Symbol','Market Price','Day Range','52w Range','Market Cap']

  constructor() { }

  ngOnInit(): void {
  }

  removeStock(symbol){
    this.selectStock.emit(symbol)
  }

}
