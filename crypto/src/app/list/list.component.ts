import { Component, OnInit } from '@angular/core';
import { CoinsService } from '../coins.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = [
    'nombre',
    'precio',
    'criptomoneda',
    'convertir',
  ];
  dataSource = [];

  constructor(
    private coinsService: CoinsService

  ) { }

  ngOnInit(): any {
    this.fecthCoins();
    this.fecthPrices();
  }

  fecthCoins(): any {
    this.coinsService.getAllCoins()
      .subscribe((coins: { data: { body: { content: any[]; }; }; }) => {
        this.dataSource = coins.data.body.content;
      });
  }

  fecthPrices(): any {
    this.coinsService.getPrices()
      .subscribe((prices: { data: any[]; }) => {
        prices.data.forEach(coinPrice => {
          this.dataSource.find(coin => coin.id === coinPrice.assetId).price = coinPrice.price;
        });
      });
  }
}
