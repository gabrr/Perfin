import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TypographyComponent } from '@app/components/atoms/typography/typography.component';

@Component({
  selector: 'timeline',
  standalone: true,
  imports: [CommonModule, RouterModule, TypographyComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {}
