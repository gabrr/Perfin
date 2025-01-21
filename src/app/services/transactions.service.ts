import { Injectable } from '@angular/core';
import {
  ITransaction,
  TypeTransactionsCategories,
} from '@app/model/transactions';
import { ApiService } from './api';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private transactions: ITransaction[] = [];

  constructor(private apiService: ApiService) {}

  async fetchTransactions(): Promise<void> {
    const data = await firstValueFrom<ITransaction[]>(
      this.apiService.get('transactions')
    );
    this.transactions = data;
  }

  async getTransactions(): Promise<ITransaction[]> {
    if (!this.transactions.length) {
      await this.fetchTransactions();
    }
    return this.transactions;
  }

  async getTotalAmount(category?: TypeTransactionsCategories): Promise<number> {
    const transactions = category
      ? await this.getByCategory(category)
      : await this.getTransactions();

    return transactions.reduce((total, transaction) => {
      const installmentAmount =
        transaction.numberOfInstallments > 1
          ? transaction.numberOfInstallments * transaction.amount
          : transaction.amount;
      return total + installmentAmount;
    }, 0);
  }

  async getTransactionsWithInstallments(): Promise<ITransaction[]> {
    const transactions = await this.getTransactions();
    return transactions.filter((tx) => tx.numberOfInstallments > 1);
  }

  async getCategoriesList(): Promise<TypeTransactionsCategories[]> {
    const transactions = await this.getTransactions();
    const categories = new Set<TypeTransactionsCategories>();
    transactions.forEach((tx) => categories.add(tx.category));
    return Array.from(categories);
  }

  async getByCategory(
    category: TypeTransactionsCategories
  ): Promise<ITransaction[]> {
    const transactions = await this.getTransactions();
    return transactions.filter((tx) => tx.category === category);
  }
}
