import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'icon-block',
  standalone: true,
  imports: [],
  templateUrl: './icon-block.component.html',
  styleUrl: './icon-block.component.scss',
})
export class IconBlockComponent {
  @Output() newCategory = new EventEmitter<void>();

  addCategory() {
    this.newCategory.emit();
  }
}
