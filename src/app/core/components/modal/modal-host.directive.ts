import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[gmt-modal-host]'
})
export class ModalHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
