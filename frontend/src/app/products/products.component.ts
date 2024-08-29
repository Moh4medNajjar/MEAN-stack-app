import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Pizza', category: 'plats', price: 12.00 },
    { id: 2, name: 'Coke', category: 'boissons', price: 2.50 },
    // Add more products as needed
  ];

  showCreateProductModal = false;
  showModifyProductModal = false;
  newProduct = { name: '', category: 'plats', price: 0 };
  currentProduct: any = null;

  openCreateProductModal() {
    this.showCreateProductModal = true;
  }

  closeCreateProductModal() {
    this.showCreateProductModal = false;
    this.newProduct = { name: '', category: 'plats', price: 0 };
  }

  createProduct() {
    this.products.push({
      id: this.products.length + 1,
      ...this.newProduct
    });
    this.closeCreateProductModal();
  }

  openModifyProductModal(product: any) {
    this.currentProduct = { ...product };
    this.showModifyProductModal = true;
  }

  closeModifyProductModal() {
    this.showModifyProductModal = false;
    this.currentProduct = null;
  }

  updateProduct() {
    const index = this.products.findIndex(p => p.id === this.currentProduct.id);
    if (index !== -1) {
      this.products[index] = this.currentProduct;
    }
    this.closeModifyProductModal();
  }

  deleteProduct(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
  }
}
