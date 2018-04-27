import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[gmtAutofocus]'
})
export class AutofocusDirective {

  constructor(private el: ElementRef) {
  }
 
  ngOnInit() {
    this.el.nativeElement.focus();
  }

}
