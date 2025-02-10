import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ReactiveFormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-purchase-form',
  standalone: true, // Certifique-se de que o componente é standalone
  imports: [ReactiveFormsModule], // Adicione o ReactiveFormsModule
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.css']
})
export class PurchaseFormComponent {
  purchaseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.purchaseForm = this.fb.group({
      total: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.purchaseForm.valid) {
      const purchase = this.purchaseForm.value;
      this.apiService.createPurchase(purchase).subscribe(
        () => {
          this.router.navigate(['/purchases']);
        },
        (error) => {
          console.error('Erro ao criar compra:', error);
        }
      );
    }
  }
}