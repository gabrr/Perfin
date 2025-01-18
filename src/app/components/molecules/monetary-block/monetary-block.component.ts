import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'monetary-block',
  standalone: true,
  template: `
    <div
      [ngClass]="bgClass"
      class="flex w-44 flex-col items-start justify-center rounded-2xl p-3 border-slate-200 border gap-1"
    >
      <ng-content select="monetary-block-title" />

      <div class="flex gap-2 items-center">
        <ng-content select="monetary-block-icon-check" />
        <ng-content select="monetary-block-value" />
        <ng-content select="monetary-block-value-negative" />
      </div>

      <ng-content select="monetary-block-subvalue" />
    </div>
  `,
  imports: [CommonModule],
})
export class MonetaryBlockComponent {
  @Input() bgClass: string = 'bg-gray-100';
}
