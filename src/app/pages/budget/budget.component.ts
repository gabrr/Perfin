import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TypographyComponent } from '@app/components/atoms/typography/typography.component';
import {
  MonetaryBlockComponent,
  MonetaryBlockIconCheckComponent,
  MonetaryBlockTitleComponent,
  MonetaryBlockValueComponent,
  MonetarySubvalueComponent,
} from '@app/components/molecules/monetary-block';
import { MonetaryBlockValueNegativeComponent } from '@app/components/molecules/monetary-block/monetary-block-value-negative.component';
import { ExpenseListComponent } from '@app/components/organisms/expense-list.component';
import { DrawerDirective } from '@app/directives/drawer.directive';
import { ApiService } from '@app/services/api';
import { mockBudget } from 'mock-budget';
import { mockStatus } from 'mockStats';

@Component({
  selector: 'budget',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MonetaryBlockComponent,
    TypographyComponent,
    MonetaryBlockTitleComponent,
    MonetaryBlockValueComponent,
    MonetaryBlockIconCheckComponent,
    MonetarySubvalueComponent,
    MonetaryBlockValueNegativeComponent,
    ExpenseListComponent,
    DrawerDirective,
  ],
  templateUrl: './budget.component.html',
})
export class BudgetComponent {
  budget = mockBudget;
  stats = mockStatus;
  transactions: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchTransactions();
  }

  fetchTransactions() {
    this.apiService.get('transactions').subscribe((data: any) => {
      this.transactions = data;
      mockStatus[0].value = this.calculateTotalExpenses();
    });
  }

  calculateTotalExpenses() {
    return this.transactions.reduce((total, transaction) => {
      return total + transaction.amount;
    }, 0);
  }
}
