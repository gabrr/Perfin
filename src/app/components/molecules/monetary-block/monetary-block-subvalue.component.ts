import { Component } from '@angular/core';
import { TypographyComponent } from '@app/components/atoms/typography/typography.component';

@Component({
  selector: 'monetary-block-subvalue',
  standalone: true,
  template: `
    <typography
      variant="p"
      class="color-secondary-on-surface text-xs font-semibold"
    >
      <ng-content />
    </typography>
  `,
  imports: [TypographyComponent],
})
export class MonetarySubvalueComponent {}
