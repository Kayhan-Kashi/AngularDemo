import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[change-logger]'
})
export class ChangeLoggerDirective {

  constructor(private el: ElementRef) { }

  @HostListener('ngModelChange') onFocus() {
    console.log(this.el.nativeElement.value);
  }

  @HostListener('ngModelChange', ['$event']) onChange(event) {
    console.log(event);
  }

}
