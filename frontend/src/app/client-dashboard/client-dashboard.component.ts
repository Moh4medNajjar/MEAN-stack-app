import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { DishService } from '../services/dish.service';
import { AuthService } from '../services/auth.service';

interface Dish {
  name: string;
  description: string;
  price: number;
  quantity?: number; // Optional, for UI purposes
}

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent implements OnInit {
  showModal = false;
  categories: ('plats' | 'boissons' | 'sauces')[] = ['plats', 'boissons', 'sauces'];
  selectedCategory: 'plats' | 'boissons' | 'sauces' = 'plats';
  dishes: Dish[] = [];
  username :any;
  userData: any;

  constructor(
    private router: Router,
    private cartService: CartService,
    private dishService: DishService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const token = this.authService.getToken();
    if (token) {
      const decodedPayload = atob(token.split('.')[1]);
      const userData = JSON.parse(decodedPayload);
      console.log(userData)
      this.userData = userData
      this.username = userData.user.username
      console.log("username", this.username)
    this.fetchProducts(this.selectedCategory);
  }
}

  fetchProducts(category: 'plats' | 'boissons' | 'sauces'): void {
    this.dishService.getProductsByCategory(category).subscribe({
      next: (response: Dish[]) => {
        this.dishes = response.map(dish => ({
          ...dish,
          quantity: 1
        }));
      },
      error: (error: any) => {
        console.error('Error fetching products:', error);
      }
    });
  }

  selectCategory(category: 'plats' | 'boissons' | 'sauces'): void {
    this.selectedCategory = category;
    this.fetchProducts(category);
  }

  increaseQuantity(dish: Dish): void {
    if (dish.quantity !== undefined) {
      dish.quantity += 1;
    }
  }

  decreaseQuantity(dish: Dish): void {
    if (dish.quantity !== undefined && dish.quantity > 1) {
      dish.quantity -= 1;
    }
  }

  navigateToCart(): void {
    this.router.navigate([`/cart/${this.username}`]);
    this.closeModal();
  }

  addToCart(dish: Dish): void {
    if (!dish || !dish.name || !dish.quantity || !dish.price) {
      console.error('Dish data is incomplete');
      return;
    }

    this.cartService.addToCart(dish.name, dish.quantity, dish.price, this.username)
      .subscribe(
        response => console.log('Item added to cart:', response),
        error => console.error('Error adding item to cart:', error)
      );
  }

  closeModal(): void {
    this.showModal = false;
  }
}
