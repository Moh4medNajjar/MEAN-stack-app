import { Component } from '@angular/core';

@Component({
  selector: 'app-waiter-dashboard',
  templateUrl: './waiter-dashboard.component.html',
  styleUrl: './waiter-dashboard.component.scss'
})
export class WaiterDashboardComponent {
  orders = [
    // Sample data
    { tableNumber: 1, username: 'john_doe', details: 'Pizza, Soda', status: 'Being Prepared' },
    { tableNumber: 2, username: 'jane_smith', details: 'Burger, Fries', status: 'Ready' }
  ];

  markAsServed(order: any) {
    order.status = 'Served';
  }

  markAsReady(order: any) {
    order.status = 'Ready';
  }

  markAsBeingPrepared(order: any) {
    order.status = 'Being Prepared';
  }
}
