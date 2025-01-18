import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TypographyComponent } from '../atoms/typography/typography.component';
import { ApiService } from '@app/services/api';

@Component({
  selector: 'expense-list',
  standalone: true,
  imports: [CommonModule, TypographyComponent],
  template: `
    <div
      class="top-8 right-8 fixed flex flex-col items-center justify-center surface rounded-3xl p-6 py-4 max-h-[90%]"
    >
      <div class="flex flex-col rounded-lg min-w-80 overflow-y-scroll">
        <div *ngFor="let transaction of transactions" class="mb-2">
          <div>
            <typography variant="p" class="font-bold text-base"
              >{{ transaction.source }} —
              {{ transaction.description }}</typography
            >
            <typography class="opacity-80">{{
              transaction.amount | currency : 'BRL'
            }}</typography>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ExpenseListComponent implements OnInit {
  transactions: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchTransactions();
  }

  fetchTransactions() {
    this.apiService.get('transactions').subscribe((data: any) => {
      this.transactions = data;
    });
  }
}
