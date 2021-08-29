import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appFocusSection]',
})
export class FocusSectionDirective {
  @Input() appFocusSection = false;
  @Input() focusClass = '';

  @HostBinding('class') get elementClass(): string {
    return this.appFocusSection ? this.focusClass : '';
  }
}
