import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalService } from '@app/core/services/modal.service';
import { ModalHostDirective } from '@app/core/components/modal/modal-host.directive';

@Component({
  selector: 'gmt-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  private visible: boolean;
  @ViewChild(ModalHostDirective) modalHost: ModalHostDirective;

  constructor(private modalService: ModalService) {
    this.visible = false;
  }

  ngOnInit() {
    this.modalService.initModalComponent(this);
  }

  closeModal() {
    this.visible = false;
  }
  
  dismissModal() {
    this.modalService.closeModal();
  }
  
  openModal() {
    this.visible = true;
  }
}
