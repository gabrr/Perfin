import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'monetary-block-icon-check',
  standalone: true,
  template: `
    <span
      class="material-symbols-rounded text-green-600 monetary-block-icon-check"
      >check_circle</span
    >
  `,
  imports: [CommonModule],
})
export class MonetaryBlockIconCheckComponent {}
