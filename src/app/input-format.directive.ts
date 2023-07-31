import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format;
  constructor(private el: ElementRef) { 
    //elementRef is a service inside angular for accessing DOM object

  }

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;  // this give us access to actual DOM object
    if (this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();   
  }
}
