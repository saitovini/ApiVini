import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5029/api'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) { }

  getProduct(): Observable<any> {
    return this.http.get(`${this.apiUrl}/product`);
  }
  // Métodos para Usuários
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/user`, user);
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/user/${id}`);
  }

  // Métodos para Purchases
  getPurchases(): Observable<any> {
    return this.http.get(`${this.apiUrl}/purchase`);
  }

  createPurchase(purchase: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/purchase`, purchase);
  }
}