import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  cartItems: any[] = []; // Adjust the type based on your cart item structure
  tableIndex: number | null = null;
  username: any;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router // Inject the Router service
  ) {}

  ngOnInit(): void {
    // Get the username from the route parameters
    this.route.params.subscribe(params => {
      this.username = params['username'];
      if (this.username) {
        this.fetchCartItems(this.username);
      }
    });
  }

  fetchCartItems(username: string): void {
    this.cartService.getCartItems(username).subscribe({
      next: (response: any[]) => {
        this.cartItems = response;
        console.log("cart items: ", this.cartItems);
      },
      error: (error: any) => {
        console.error('Error fetching cart items:', error);
      }
    });
  }

  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
  }

  createOrder(): void {
    if (this.username && this.tableIndex && this.cartItems.length > 0) {
      const orderDetails = this.cartItems.map(item => ({
        productName: item.product,
        productID: item._id, // Adjust this if your item structure is different
        quantity: item.quantity
      }));

      const totalPrice = this.calculateTotal();

      const order = {
        username: this.username,
        tableNumber: this.tableIndex,
        orderDetails: orderDetails,
        totalPrice: totalPrice
      };

      this.orderService.createOrder(order).subscribe(
        response => {
          console.log('Order created successfully:', response);
          // Clear the cart after order confirmation
          this.cartItems = [];
          this.cartService.clearCart(this.username).subscribe(
            () => {
              console.log('Cart cleared successfully');
            },
            (            error: any) => {
              console.error('Error clearing cart:', error);
            }
          );
          // Redirect to the client-dashboard
          this.router.navigate(['/client-dashboard']);
        },
        error => {
          console.error('Error creating order:', error);
        }
      );
    } else {
      console.error('Missing required information or cart is empty');
    }
  }

  proceedToCheckout(): void {
    alert('Proceeding to checkout!');
    // Add logic to handle checkout
  }
}
