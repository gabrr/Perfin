import { Component, Input } from '@angular/core';
import { TypographyComponent } from '@app/components/atoms/typography/typography.component';

@Component({
	selector: 'monetary-block-value',
	standalone: true,
	template: `
    <typography variant="h4" [class]="class + ' text-slate-500 font-bold'">
      <ng-content />
    </typography>
  `,
	imports: [TypographyComponent],
})
export class MonetaryBlockValueComponent {
	@Input() class: string = '';
}
