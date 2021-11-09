import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stock-preview',
  templateUrl: './stock-preview.component.html',
  styleUrls: ['./stock-preview.component.scss']
})
export class StockPreviewComponent implements OnInit {

  @Input() stock:any
  @Output() selectStock = new EventEmitter()

  constructor() { }

  ngOnInit(): void {

  }

  removeStock(symbol:string){
    this.selectStock.emit(symbol)
  }

  
}
