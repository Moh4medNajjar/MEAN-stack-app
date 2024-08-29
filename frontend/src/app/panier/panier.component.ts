import { Component } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.scss'
})
export class PanierComponent {
  cartItems = [
    { name: 'Dish 1', quantity: 1, price: 12.00 },
    { name: 'Drink 1', quantity: 2, price: 3.50 },
    // Add more items here
  ];

  tableIndex: number | null = null;

  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
  }

  confirmOrder(): void {
    alert('Order confirmed!');
    // Add logic to handle order confirmation
  }

  proceedToCheckout(): void {
    alert('Proceeding to checkout!');
    // Add logic to handle checkout
  }
}
