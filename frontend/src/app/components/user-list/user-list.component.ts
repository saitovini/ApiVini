import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true, // Certifique-se de que o componente é standalone
  imports: [CommonModule, RouterModule], // Adicione CommonModule e RouterModule

  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadUsers();
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

  deleteUser(id: number): void {
    this.apiService.deleteUser(id).subscribe(
      () => {
        this.loadUsers(); // Recarrega a lista após deletar
      },
      (error) => {
        console.error('Erro ao deletar usuário:', error);
      }
    );
  }
}