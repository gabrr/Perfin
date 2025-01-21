import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ITransaction } from '@app/model/transactions';
import { TypographyComponent } from '../atoms/typography/typography.component';

@Component({
  selector: 'expense-list',
  standalone: true,
  imports: [CommonModule, TypographyComponent],
  template: `
    <div
      class="top-8 right-8 fixed flex flex-col items-center justify-center surface rounded-3xl p-6 py-4 max-h-[90%]"
    >
      <div class="flex flex-col rounded-lg min-w-80 overflow-y-scroll">
        <div *ngFor="let transaction of transactions()" class="mb-2">
          <div>
            <typography variant="p" class="font-bold text-base"
              >{{ transaction.date | date : 'dd/MM/yyyy' }} —
              {{ transaction.source }} —
              {{ transaction.description }}</typography
            >
            <typography variant="p" class="text-red-400 text-base">{{
              transaction.category
            }}</typography>

            <typography class="opacity-80"
              >{{ transaction.amount | currency : 'BRL' }}
              {{
                transaction.numberOfInstallments > 1
                  ? ' — ' +
                    (transaction.numberOfInstallments * transaction.amount
                      | currency : 'BRL')
                  : null
              }}</typography
            >
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ExpenseListComponent {
  transactions = input<ITransaction[]>([]);
}
