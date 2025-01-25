import { Component } from '@angular/core';
import { BasketService } from '../basket.service';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Review {
  user: string;
  comment: string;
}

interface Product {
  name: string;
  color: string;
  type: string;
  price: number;
  image: string;
  rating: number;
  reviews: Review[];
}

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products = [
    {
      name: 'Bella',
      color: 'White',
      type: 'Dog',
      price: 70,
      image: 'https://i.pinimg.com/236x/c5/e9/58/c5e958e5e56340b8106e89b764ab9cec.jpg',
      rating: 4.5,
      reviews: [{ user: 'Alice', comment: 'Great product!' }]
    },
    {
      name: 'Charlie',
      color: 'Grey',
      type: 'Cat',
      price: 45,
      image: 'https://i.pinimg.com/236x/36/f9/fc/36f9fccc74fc13b921edf78fd67d3ef4.jpg',
      rating: 4.0,
      reviews: [{ user: 'Alice', comment: 'Great product!' }]
    },
    {
      name: 'Max',
      color: 'Brown',
      type: 'Dog',
      price: 180,
      image: 'https://i.pinimg.com/236x/bc/d1/60/bcd160098cd4746f944cccb8533cb813.jpg',
      rating: 3.5,
      reviews: [{ user: 'Alice', comment: 'Great product!' }]
    },
    {
      name: 'Luna',
      color: 'Brown',
      type: 'Rabbit',
      price: 50,
      image: 'https://i.pinimg.com/236x/b3/28/93/b328936a87db3ce763de560e3bc3ccb3.jpg',
      rating: 4.8,
      reviews: [{ user: 'Alice', comment: 'Great product!' }]
    },
    {
      name: 'Rocky',
      color: 'White and black',
      type: 'Dog',
      price: 75,
      image: 'https://i.pinimg.com/236x/fe/d1/92/fed192a4a9e6705855d8ab2a5c68db0c.jpg',
      rating: 4.2,
      reviews: [{ user: 'Alice', comment: 'Great product!' }]
    },
    {
      name: 'Sadie',
      color: 'Red',
      type: 'Bird',
      price: 45,
      image: 'https://i.pinimg.com/236x/a8/e6/1d/a8e61d75f2da9553855f22cfb7ecf9c4.jpg',
      rating: 4.7,
      reviews: [{ user: 'Alice', comment: 'Great product!' }]
    },
    {
      name: 'Cooper',
      color: 'Grey',
      type: 'Rabbit',
      price: 25,
      image: 'https://i.pinimg.com/236x/dd/48/a8/dd48a8369b07060728d9f42705eaeaf1.jpg',
      rating: 4.0,
      reviews: [{ user: 'Alice', comment: 'Great product!' }]
    },
    {
      name: 'Coco',
      color: 'White',
      type: 'Cat',
      price: 35,
      image: 'https://i.pinimg.com/236x/06/de/b2/06deb200eab3d83fbfb6b3ed91702289.jpg',
      rating: 4.5,
      reviews: [{ user: 'Alice', comment: 'Great product!' }]
    },
    {
      name: 'Sunny',
      color: 'Green',
      type: 'Bird',
      price: 30,
      image: 'https://i.pinimg.com/236x/6a/7a/6a/6a7a6a739abac5b38c01fe5309a15298.jpg',
      rating: 3.8,
      reviews: [{ user: 'Alice', comment: 'Great product!' }]
    },
    {
      name: 'Riley',
      color: 'Grey',
      type: 'Cat',
      price: 20,
      image: 'https://i.pinimg.com/236x/6f/4e/1d/6f4e1da7bc3c0ac59cb7c697398760ca.jpg',
      rating: 4.0,
      reviews: [{ user: 'Alice', comment: 'Great product!' }]
    },
    {
      name: 'Buddy',
      color: 'Brown',
      type: 'Dog',
      price: 68,
      image: 'https://i.pinimg.com/236x/21/02/4d/21024dc75a0a5c4e756cf7bb33418b85.jpg',
      rating: 4.6,
      reviews: [{ user: 'Alice', comment: 'Great product!' }]
    },
    {
      name: 'Lucky',
      color: 'White',
      type: 'Rabbit',
      price: 30,
      image: 'https://i.pinimg.com/236x/cd/e6/19/cde619884998ddd682919d1e80b9c315.jpg',
      rating: 4.3,
      reviews: [{ user: 'Alice', comment: 'Great product!' }]
    }
  ];
  filteredProducts = [...this.products];
  newReview: string = '';
  newReviewUser: string = '';
  selectedProduct: Product | null = null;

  minPrice: number | undefined;
  maxPrice: number | undefined;

  applyPriceFilter() {
    if (this.minPrice === undefined || this.maxPrice === undefined) {
      return;
    }
    this.filteredProducts = this.products.filter(product =>
      product.price >= this.minPrice! && product.price <= this.maxPrice!
    );
  }

  constructor(private basketService: BasketService, private snackBar: MatSnackBar) {}

  addToBasket(product: Product) {
    this.basketService.addProduct(product);
    this.snackBar.open('Product added to basket', 'Close', {
      duration: 2000,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(filterValue) ||
      product.type.toLowerCase().includes(filterValue)
    );
  }
  

  addReview(product: Product) {
    if (this.newReview.trim() && this.newReviewUser.trim()) {
      product.reviews.push({
        user: this.newReviewUser,
        comment: this.newReview
      });
      this.newReview = '';
      this.newReviewUser = '';
    }
  }

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }

  rateProduct(product: Product, rating: number) {
    product.rating = rating;
  }
}