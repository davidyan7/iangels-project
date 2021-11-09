import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {

@Input() stocks:any
@Output() selectStock = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  removeStock(symbol){
    this.selectStock.emit(symbol)
  }

}
