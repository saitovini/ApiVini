import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe o CommonModule
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Adicione os módulos necessários
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: any[] = [];
  purchases: any[] = [];
  users: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadPurchases();
    this.loadUsers();
  }

  loadProducts(): void {
    this.apiService.getProduct().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Erro ao carregar produtos:', error);
      }
    );
  }

  loadPurchases(): void {
    this.apiService.getPurchases().subscribe(
      (data) => {
        this.purchases = data;
      },
      (error) => {
        console.error('Erro ao carregar compras:', error);
      }
    );
  }

  loadUsers(): void {
    this.apiService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Erro ao carregar usuários:', error);
      }
    );
  }
}