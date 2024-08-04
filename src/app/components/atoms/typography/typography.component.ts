import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'typography',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container [ngSwitch]="variant">
      <ng-container *ngSwitchCase="'h1'">
        <h1 class="{{ compiledClass }}">
          <ng-container [ngTemplateOutlet]="content"></ng-container>
        </h1>
      </ng-container>
      <ng-container *ngSwitchCase="'h2'">
        <h2 class="{{ compiledClass }}">
          <ng-container [ngTemplateOutlet]="content"></ng-container>
        </h2>
      </ng-container>
      <ng-container *ngSwitchCase="'h3'">
        <h3 class="{{ compiledClass }}">
          <ng-container [ngTemplateOutlet]="content"></ng-container>
        </h3>
      </ng-container>
      <ng-container *ngSwitchCase="'h4'">
        <h4 class="{{ compiledClass }}">
          <ng-container [ngTemplateOutlet]="content"></ng-container>
        </h4>
      </ng-container>
      <ng-container *ngSwitchCase="'h5'">
        <h5 class="{{ compiledClass }}">
          <ng-container [ngTemplateOutlet]="content"></ng-container>
        </h5>
      </ng-container>
      <ng-container *ngSwitchCase="'h6'">
        <h6 class="{{ compiledClass }}">
          <ng-container [ngTemplateOutlet]="content"></ng-container>
        </h6>
      </ng-container>
      <ng-template [ngSwitchDefault]>
        <p class="{{ compiledClass }}">
          <ng-container [ngTemplateOutlet]="content"></ng-container>
        </p>
      </ng-template>
    </ng-container>
    <ng-template #content>
      <ng-content></ng-content>
    </ng-template>
  `,
})
export class TypographyComponent implements OnInit {
  @Input() variant: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' = 'p';
  @Input() class: string = '';

  compiledClass: string = '';

  ngOnInit(): void {
    this.compiledClass = `${this.class} ${this.getCompiledClass(this.variant)}`;
  }

  getCompiledClass(variant: string): string {
    switch (variant) {
      case 'h1':
        return 'text-4xl font-bold';
      case 'h2':
        return 'text-3xl font-semibold';
      case 'h3':
        return 'text-2xl font-medium';
      case 'h4':
        return 'text-xl';
      case 'p':
        return 'text-base';
      case 'span':
        return 'text-sm';
      default:
        return 'text-base';
    }
  }
}
