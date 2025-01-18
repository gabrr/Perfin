import { Component, Input } from '@angular/core';
import { TypographyComponent } from '@app/components/atoms/typography/typography.component';

@Component({
  selector: 'monetary-block-title',
  standalone: true,
  template: `
    <!-- Improve the accessibility by adding the correct html tags -->
    <typography
      variant="p"
      [class]="'color-secondary-on-surface font-bold ' + class"
    >
      <ng-content />
    </typography>
  `,
  imports: [TypographyComponent],
})
export class MonetaryBlockTitleComponent {
  @Input() class: string = '';
}
