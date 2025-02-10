import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-purchase-list',
  standalone: true, 
  imports: [CommonModule, RouterModule],
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit {
  purchases: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadPurchases();
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
}