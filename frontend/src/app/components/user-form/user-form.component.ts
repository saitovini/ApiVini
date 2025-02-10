import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ReactiveFormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-user-form',
  standalone: true, // Certifique-se de que o componente é standalone
  imports: [ReactiveFormsModule], // Adicione o ReactiveFormsModule
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  isEditMode = false;
  userId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.userId = +this.route.snapshot.params['id'];
    if (this.userId) {
      this.isEditMode = true;
      this.loadUser(this.userId);
    }
  }

  loadUser(id: number): void {
    this.apiService.getUsers().subscribe(
      (users) => {
        const user = users.find((u: any) => u.id === id);
        if (user) {
          this.userForm.patchValue(user);
        }
      },
      (error) => {
        console.error('Erro ao carregar usuário:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const user = this.userForm.value;
      if (this.isEditMode && this.userId) {
        this.apiService.updateUser(this.userId, user).subscribe(
          () => {
            this.router.navigate(['/users']);
          },
          (error) => {
            console.error('Erro ao atualizar usuário:', error);
          }
        );
      } else {
        this.apiService.createUser(user).subscribe(
          () => {
            this.router.navigate(['/users']);
          },
          (error) => {
            console.error('Erro ao criar usuário:', error);
          }
        );
      }
    }
  }
}