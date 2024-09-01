import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = 'http://localhost:3000/api/cart'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  addToCart(productName: string, quantity: number, price: number, username: string): Observable<any> {
    const body = { productName, quantity, price, username };
    return this.http.post(`${this.apiUrl}/add`, body);
  }

  getCartItems(username: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/items/${username}`);
  }

  clearCart(username: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/clear/${username}`);
  }

}
