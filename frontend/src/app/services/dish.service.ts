import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  private apiUrl = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) { }

  getAllDishes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteDish(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  updateDish(id: string, updatedDish: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, updatedDish);
  }

  getProductsByCategory(category: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/category/${category}`);
  }

  createDish(newDish: any): Observable<any> {
    return this.http.post(this.apiUrl, newDish);
  }
}
