import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3000/api/users'; // Adjust the URL according to your backend

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  private waiterUrl = 'http://localhost:3000/api/users/waiters'; // Adjust the URL according to your backend

  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.waiterUrl, user);
  }

  updateUser(id: string, user: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, user);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  getUserById(userId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${userId}`);
  }

  changePassword(userId: string, oldPassword: string, newPassword: string, confirmNewPassword: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/change-password`, { userId, oldPassword, newPassword, confirmNewPassword });
}

}
