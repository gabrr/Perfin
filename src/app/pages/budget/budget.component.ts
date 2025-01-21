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
import {
  ITransaction,
  TypeTransactionsCategories,
} from '@app/model/transactions';
import { TransactionService } from '@app/services/transactions.service';

interface TypeBudgetCategory {
  label: TypeTransactionsCategories;
  value: number;
  limit: number;
}

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
  category?: TypeTransactionsCategories;
  transactions: ITransaction[] = [];
  total: number = 0;
  budget: any[] = [];

  constructor(private transactionService: TransactionService) {}

  async ngOnInit() {
    this.transactions = await this.transactionService.getTransactions();
    this.total = await this.transactionService.getTotalAmount();

    const categories = await this.transactionService.getCategoriesList();
    this.budget = await Promise.all(
      categories.map(async (category) => ({
        label: category,
        limit: 800,
        value: await this.transactionService.getTotalAmount(category),
      }))
    );

    console.log({ categories, b: this.budget, tr: this.transactions });
  }

  async handleCategoryClick(item: TypeBudgetCategory) {
    if (item.label === this.category) {
      this.category = undefined;
      this.transactions = await this.transactionService.getTransactions();
      return;
    }

    this.category = item.label;
    this.transactions = await this.transactionService.getByCategory(item.label);
  }
}
