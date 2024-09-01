import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-waiter-dashboard',
  templateUrl: './waiter-dashboard.component.html',
  styleUrls: ['./waiter-dashboard.component.scss'] // Corrected styleUrl to styleUrls
})
export class WaiterDashboardComponent implements OnInit {
  orders: any[] = [];
  userNames: { [key: string]: string } = {}; // Object to map user IDs to usernames

  constructor(
    private ordersService: OrderService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.ordersService.getOrders().subscribe(
      (orders: any[]) => {
        // Filter the orders to exclude those with status 'Served'
        this.orders = orders.filter(order => order.status !== 'Served');
        console.log("Filtered orders (excluding 'Served'): ", this.orders);
      },
      (error) => {
        console.error('Error loading orders:', error);
        // Optionally, you can set an error message to display in the UI
        // this.errorMessage = 'Failed to load orders. Please try again later.';
      }
    );
  }








}
