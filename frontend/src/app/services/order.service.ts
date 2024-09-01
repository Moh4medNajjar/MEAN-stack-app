import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private waiterUrl = 'http://localhost:3000/api/orders/forWaiter';
  private apiUrl = 'http://localhost:3000/api/orders';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  changeStatus(orderId: string, status: string): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${orderId}`, { status });
  }

  createOrder(order: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, order);
  }
}
