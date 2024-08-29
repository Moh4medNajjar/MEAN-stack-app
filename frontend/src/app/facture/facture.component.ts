import { Component } from '@angular/core';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrl: './facture.component.scss'
})
export class FactureComponent {
  printInvoice(): void {
    window.print(); // Triggers the print dialog
  }
}
