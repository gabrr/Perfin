import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[drawer]',
})
export class DrawerDirective implements OnInit {
  element: HTMLElement;

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }

  @HostListener('mouseenter', ['$event']) onClick() {
    this.slideToOriginal(this.element);
  }

  @HostListener('mouseleave', ['$event']) onLeave() {
    this.slideToRight(this.element);
  }

  ngOnInit(): void {
    this.element =
      this.element.querySelector('div') || document.createElement('div');

    this.addTransition(this.element);
  }

  slideToRight(item: HTMLElement) {
    item.style.transform = 'translateX(10%)';
  }

  slideToOriginal(item: HTMLElement) {
    item.style.transform = 'translateX(0)';
  }

  addTransition(item: HTMLElement) {
    item.style.transition = 'transform 300ms ease-in-out';
  }
}
