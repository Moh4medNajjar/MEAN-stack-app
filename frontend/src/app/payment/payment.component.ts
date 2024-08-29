import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  selectedPaymentMethod: string = 'creditCard'; // Default payment method

  confirmCashPayment(): void {
    alert('Cash payment confirmed!');
    // Add logic to handle cash payment confirmation
  }

  payWithCreditCard(): void {
    alert('Credit card payment processed!');
    // Add logic to handle credit card payment
  }

}
