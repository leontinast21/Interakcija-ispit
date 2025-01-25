import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private basket: any[] = [];

  addProduct(product: any) {
    this.basket.push(product);
  }

  getBasket() {
    return this.basket;
  }

  removeProduct(index: number) {
    this.basket.splice(index, 1);
  }
}
