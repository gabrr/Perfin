import { Component } from '@angular/core';
import { TypographyComponent } from '@app/components/atoms/typography/typography.component';

@Component({
  selector: 'monetary-block-value-negative',
  standalone: true,
  template: `
    <typography variant="h4" class="text-red-400 font-bold">
      <ng-content />
    </typography>
  `,
  imports: [TypographyComponent],
})
export class MonetaryBlockValueNegativeComponent {}
