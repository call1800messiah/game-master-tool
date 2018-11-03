import { 
  ComponentFactoryResolver, 
  Injectable, 
} from '@angular/core';
import { ModalComponent } from '@app/core/components/modal/modal.component';
import { ModalChild } from '@app/core/interfaces/IModalChild';



@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modal: ModalComponent;
  private childComponentRef: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  
  closeModal(): void {
    this.childComponentRef
    this.modal.closeModal();
  }
  
  initModalComponent(component: ModalComponent): void {
    this.modal = component;
  }
  
  openModal(component: any, data: any): void {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    let viewContainerRef = this.modal.modalHost.viewContainerRef;
    viewContainerRef.clear();
    this.childComponentRef = viewContainerRef.createComponent(componentFactory);
    (<ModalChild>this.childComponentRef.instance).data = data;
    
    this.modal.openModal();
  }
}
