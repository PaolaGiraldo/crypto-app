import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { CoinsService } from '../coins.service';

@Component({
  selector: 'app-cambio',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.sass']
})
export class ChangeComponent implements OnInit {

  form: FormGroup;

  coins = [];
  prices = [];
  coinFromValue = '';
  coinToValue = '';
  result = 0;
  price = 0;

  constructor(
    private formBuilder: FormBuilder,
    private coinsService: CoinsService,
    private activeRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.getCoins();
    this.getPrices();
    const coinsDefault = ['BTC', 'USD'];
    this.form.get('coinFrom').setValue(coinsDefault[0]);
    this.form.get('coinTo').setValue(coinsDefault[1]);
    [this.coinFromValue, this.coinToValue] = coinsDefault;
    if (this.activeRoute.snapshot.queryParams.convertFrom) {
      this.activeRoute.queryParams.subscribe(params => {
        this.form.get('coinFrom').setValue(params.convertFrom);
      });
    }
  }

  private buildForm(): any {
    this.form = this.formBuilder.group({
      amount: ['', [Validators.required, Validators.min(0)]],
      coinFrom: ['', [Validators.required]],
      coinTo: ['', [Validators.required]],
      result: ['']
    });
  }

  convertCoin(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      [this.coinFromValue, this.coinToValue] = [this.form.value.coinFrom, this.form.value.coinTo];
      const [idCoinFrom, idCoinTo] = [this.getIdSelected(this.coinFromValue), this.getIdSelected(this.coinToValue)];
      const [priceFrom, priceTo] = [this.getPriceById(idCoinFrom), this.getPriceById(idCoinTo)];
      if (this.coinToValue === 'USD') {

        this.result = this.form.value.amount * priceFrom;
      } else {
        this.result = (this.form.value.amount / priceFrom) * priceTo;
      }
      this.form.get('result').setValue(this.result.toFixed(3));
    }
  }

  getCoins(): any {
    this.coinsService.getAllCoins()
      .subscribe(coins => {
        this.coins = coins.data.body.content;
      });
  }

  getIdSelected(coinSymbol: string): string {
    const id = this.coins.find(coin => coin.symbol === coinSymbol).id;
    return id;
  }

  getPrices(): any {
    this.coinsService.getPrices()
      .subscribe(prices => {
        this.prices = prices.data;
      });
  }

  getPriceById(id: string): number {

    const coinJson = this.coins.find(coin => coin.id === id);
    if (coinJson.type === 'CRYPTO') {
      this.price = this.prices.find(coin => coin.assetId === id).price;
    } else {
      this.price = 1;
    }
    return this.price;
  }
  
}

