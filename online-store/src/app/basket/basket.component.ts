import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket: any[] = [];
  totalPrice: number = 0;

  constructor(private basketService: BasketService) {}

  ngOnInit() {
    this.basket = this.basketService.getBasket();
    this.calculateTotalPrice();
  }

  removeFromBasket(index: number) {
    this.basketService.removeProduct(index);
    this.basket = this.basketService.getBasket();
    this.calculateTotalPrice(); 
  }

  calculateTotalPrice() {
    this.totalPrice = this.basket.reduce((total, product) => total + product.price, 0);
  }


  
}
