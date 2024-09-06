import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

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

  updateOrderStatus(orderId: string, status: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${orderId}/status`, { status });
  }

  getOrdersByUsername(username: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${username}`);
  }
  getOrderById(id: string): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/facture/${id}`);
  }
  getAllOrders(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}`);
  }


}
