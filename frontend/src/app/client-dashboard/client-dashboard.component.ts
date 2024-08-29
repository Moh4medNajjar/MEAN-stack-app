import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface Dish {
  name: string;
  description: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrl: './client-dashboard.component.scss'
})
export class ClientDashboardComponent implements OnInit {
  categories: ('plats' | 'boissons' | 'sauces')[] = ['plats', 'boissons', 'sauces'];
  selectedCategory: 'plats' | 'boissons' | 'sauces' = 'plats';
  dishes: Dish[] = [];
  showModal = false;

  allDishes: Record<'plats' | 'boissons' | 'sauces', Dish[]> = {
    plats: [
      { name: 'Dish 1', description: 'Delicious dish 1', price: 12.00, quantity: 1 },
      { name: 'Dish 2', description: 'Delicious dish 2', price: 15.00, quantity: 1 },
      { name: 'Dish 2', description: 'Delicious dish 2', price: 15.00, quantity: 1 },
      { name: 'Dish 2', description: 'Delicious dish 2', price: 15.00, quantity: 1 },
      { name: 'Dish 2', description: 'Delicious dish 2', price: 15.00, quantity: 1 },
      { name: 'Dish 2', description: 'Delicious dish 2', price: 15.00, quantity: 1 },
      { name: 'Dish 2', description: 'Delicious dish 2', price: 15.00, quantity: 1 },
    ],
    boissons: [
      { name: 'Drink 1', description: 'Refreshing drink 1', price: 3.50, quantity: 1 },
      { name: 'Drink 2', description: 'Refreshing drink 2', price: 4.00, quantity: 1 },
    ],
    sauces: [
      { name: 'Sauce 1', description: 'Tasty sauce 1', price: 2.00, quantity: 1 },
      { name: 'Sauce 2', description: 'Tasty sauce 2', price: 2.50, quantity: 1 },
    ]
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.dishes = this.allDishes[this.selectedCategory];
  }

  selectCategory(category: 'plats' | 'boissons' | 'sauces'): void {
    this.selectedCategory = category;
    this.dishes = this.allDishes[category];
  }

  increaseQuantity(dish: Dish): void {
    dish.quantity += 1;
  }

  decreaseQuantity(dish: Dish): void {
    if (dish.quantity > 1) {
      dish.quantity -= 1;
    }
  }

  addToCart(dish: Dish): void {
    // Handle adding the dish to the cart
    console.log(`Added ${dish.name} to the cart`);
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  navigateToCart(): void {
    this.router.navigate(['/cart']);
    this.closeModal();
  }

}
