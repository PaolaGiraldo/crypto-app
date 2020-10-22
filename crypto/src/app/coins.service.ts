import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CoinsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCoins(): any {
    const req = this.http.get('http://localhost:3000/coins');
    return req;
  }

  getPrices(): any {
    const req = this.http.get('http://localhost:3000/price');
    return req;
  }
}
