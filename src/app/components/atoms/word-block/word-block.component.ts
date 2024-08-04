import { Component, Input } from '@angular/core';

@Component({
  selector: 'word-block',
  standalone: true,
  imports: [],
  templateUrl: './word-block.component.html',
  styleUrl: './word-block.component.scss',
})
export class WordBlockComponent {
  @Input() name!: string;
}
